
import argon2 from 'argon2';
import crypto from "crypto";
import jwt from 'jsonwebtoken';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

//  Argon2 Encryption - Start
async function generateArgon2(password,obj){
    try {
        const hash = await argon2.hash(password,obj);
        return hash;
    } catch (error) {
        console.log('Error generating hash:',error)
    }
};

async function verifyArgon2(hash,password){
    try {
        const isHash = await argon2.verify(hash,password);
        return isHash;
    } catch (error) {
        console.log('Error generating hash:',error)
    }
};

//  Argon2 Encryption - End

// AES256 Encryption - Start
function generateAES256(textToBeEncrypted,key,iv){
    const cipher = crypto.createCipheriv('aes-256-cbc',key,iv);
    let encrypted = cipher.update(textToBeEncrypted,'utf-8','hex');
    encrypted += cipher.final('hex');
    return {
        iv:iv.toString('hex'),
        encrypted: encrypted
    }

}

function decryptAES256(encryptedData,key,ivHex) {
    const decipher = crypto.createDecipheriv('aes-256-cbc',key,Buffer.from(ivHex,'hex'));
    let decrypted = decipher.update(encryptedData,'hex','utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}
// AES256 Encryption - End

const password = process.env.ARGON2_PASSWORD;
const iv = Buffer.from('ccba9655abe3ead8');
const key = Buffer.from('4751017263c9d503b32c9762a6dd5032');


const argon2Config = {
    type:argon2.argon2id,
    memoryCost:2 ** 16,
    timeCost: 5,
    parallelism:1
}

const encrypted = generateAES256(password,key,iv);
const hash = await generateArgon2(encrypted.encrypted,argon2Config);

console.log(hash);

