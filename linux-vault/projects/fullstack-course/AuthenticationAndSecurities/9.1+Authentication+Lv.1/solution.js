
import argon2 from 'argon2';
import crypto, { generateKey, publicDecrypt, Sign, verify } from "crypto";
import jwt from 'jsonwebtoken';
import fs from 'fs';

//  argon2 start
async function generateArgon2(password,obj){
    try {
        const hash = await argon2.hash(password,obj);
        return hash;
    } catch (error) {
        console.log('Error generating hash:',error)
    }
};

async function verifyArgon2(password,obj){
    try {
        const isHash = await argon2.verify(password,obj);
        return isHash;
    } catch (error) {
        console.log('Error generating hash:',error)
    }
};

const argon2Config = {
    type:argon2.argon2id,
    memoryCost:2 ** 16,
    timeCost: 5,
    parallelism:1
}
// argon2 end

// HMAC start

function generateHMAC(hashAlgorithm,key,message){
    try {
        const hmac = crypto.createHmac(hashAlgorithm,key).update(message).digest('hex');
        return hmac;
    } catch (error) {
        console.log('Error generating HMAC:',error);

    }
}

function verifyHMAC(hashAlgorithm,key,message,receivedHMAC) {
    try {
        const calculatedHmac = crypto.createHmac(hashAlgorithm,key).update(message).digest('hex');
        if (calculatedHmac == receivedHMAC) return true 
        else false
    } catch (error) {
        console.log('Error verifying HMAC:',error);
    }
}


const receivedHMAC = generateHMAC('sha256','123','message');
console.log('Verifying HMAC:',verifyHMAC('sha256','123','message',receivedHMAC))

// HMAC end

// AES256 start
const key = Buffer.from('4751017263c9d503b32c9762a6dd5032');
const iv = Buffer.from('ccba9655abe3ead8');


function generateAES256(text,key,iv){
    const cipher = crypto.createCipheriv('aes-256-cbc',key,iv);
    let encrypted = cipher.update(text,'utf-8','hex');
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
// AES256 end


// PublicKey and PrivateKey start


let { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength:8 * 256, // key size in bits
    publicKeyEncoding:{
        type:'pkcs1',
        format:'pem', // output format (Base64-encoded)
        cipher:'aes-256-cbc',
        passphrase:'123'
    },
    privateKeyEncoding:{
        type:'pkcs1',
        format:'pem',
        cipher:'aes-256-cbc',
        passphrase:'123'
    },
    // compression:'zlib',
    // hashAlgorithm:'sha256'
});

const decryptedPrivateKey = crypto.createPrivateKey({
    key:privateKey,
    format: 'pem',
    passphrase:'123'
}).export({ format: 'pem', type: 'pkcs1' });


    // console.log('Decrypted PrivateKey :',decryptedPrivateKey.export({format:'pem',type:'pkcs1'}));
    // console.log('Public Key:', publicKey);
    // console.log('Private Key:', privateKey);

// PublicKey and PrivateKey end

// Digital Signature start

const cert = fs.readFileSync('privateKey.pem','utf-8');

const token = jwt.sign({
    'sub':'123456789',
    'name':'antonio pedro',
    'admin':true,
    'data':'foobar'
},cert,{
    algorithm:'HS256'
});

console.log('Token :',token);

const decoded = jwt.verify(token,cert);



// Digital Signature end


