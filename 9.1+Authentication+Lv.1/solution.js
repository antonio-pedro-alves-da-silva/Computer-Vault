import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import argon2 from 'argon2';
import crypto from 'crypto';

async function generateHash(password,argonConfig){
  try {
    const hash = await argon2.hash(password,argonConfig);
    return hash;
  } catch (error) {
    console.log('Error generating hash:',error);
  }
}

const argonDefaultConfig = {
  type:argon2.argon2id,
  memoryCost:2 ** 16,
  timeCost:5,
  parallelism:1,
};

async function verifyHash(hash,password){
  try {
    const isHash = await argon2.verify(hash,password);
    return isHash;
  } catch (error) {
    console.log('Error verifying hash:',error);
  }
}

const password = '123';
const hash = await generateHash(password,argonDefaultConfig);

function generateHMAC(algorithm,key,message){
  try {
    const hmac = crypto.createHmac(algorithm,key).update(message).digest('hex');
    return hmac; 
  } catch (error) {

  }
}

const key = hash;

const hmac = generateHMAC('sha256',key,'Google');

console.log(hmac);


// function verifyHmac();

/*
const app = express();
const port = 3000;

const db = new pg.Client({
  user:'antonio',
  host:'localhost',
  database:'postgres',
  password:'123456',
  port:5432
});
db.connect()

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req,res) => {
  res.render('home.ejs');
})

app.get('/register',(req,res)=>{
  res.render('register.ejs');
})

app.get('/login', (req,res) => {
  res.render('login.ejs');
})

app.post('/register', async (req,res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query(`SELECT email from users WHERE email = '${email}'`);

    if(checkResult.rows.length > 0){
      res.send('Email already exist');
    } else {
      const result = await db.query(`INSERT INTO users (email,password) VALUES ('${email}','${password}')`)
      res.send(result);
    }
  } catch (error) {
      console.log(error);
      res.send(error);
  }

})

app.post('/login', async (req,res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query(`SELECT email,password from users WHERE email = '${email}' AND password = '${password}' `);

    if(checkResult.rows.length > 0){
      res.render('secrets.ejs');
    } else {
      res.send('Email or Password Incorret!')
    }

  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

app.listen(port,(req,res) => {
  console.log(`Server Running on Port:${port}`);
})

*/