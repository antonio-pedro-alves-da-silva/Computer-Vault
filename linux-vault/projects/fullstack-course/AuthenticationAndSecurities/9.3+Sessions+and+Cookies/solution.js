

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";
import argon2 from 'argon2';
import crypto from "crypto";

const app = express();
const port = 3000;
env.config();

app.use(
  session({
    secret: 'TOPSECRETWORD', // string that sign the id cookie ensuring it's integrity // secret: ['key1', 'key2'] // Supports key rotation
    resave: false, // false saves only when the request was been modified , prevents unnecessary operations
    saveUninitialized: false, // if true it's save uninitialized sessions , storage session even when data was not added
    // cookie: {
    //   httpOnly: false, // Ensures the cookie is only accessible via HTTP(S), not JavaScript.
    //   secure: true, // Ensures the cookie is sent only over HTTPS. Should be true in production.
    //   maxAge: 3600000, // what is maximum age ?
    // }
    // proxy: true, // Required when secure cookies are used behind a proxy.
    // store: new RedisStore({ client: redisClient }), // example using Redis
    // rolling: false, // resets cookie expiration
    // name: 'custom_session_id', // custom cookie name
  })
);


// <input type="text" name="details[age]" />
// if is true allows us to use details[age]=30 => req.body = { details:{age:30} }

app.use(bodyParser.urlencoded({ extended: true }));
// usado para servir recursos da pasta /public
// http://localhost:3000/static/index.html
// http://localhost:3000/static/style.css

app.use(express.static("public"))

// app.use('/static',express.static("public"))
  // /static é uma rota-base(prefxo) para public
  // http://localhost:3000/static/index.html
  // http://localhost:3000/static/style.css

app.use(passport.initialize());
// Esse middleware conecta o Passport ao mecanismo
// de sessão do Express. Ele é necessário para
// persistir a autenticação entre requisições.


app.use(passport.session());
// enables session support for authentication.
// This line ensures that after a user logs in,
// their authentication state is preserved between HTTP requests using sessions,
// allowing you to access req.user to identify the logged-in user in subsequent requests.

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123",
  port: 5432,
});
db.connect();

app.get('/', (req,res) => {

  if (req.isAuthenticated()) {
    res.render('secrets.ejs');

  } 
  else {
    console.log('Is Not Authenticated');
    res.render('home.ejs');
  }

})

app.get('/login', (req,res) => {
  res.render('login.ejs');
})

app.get('/register', (req,res) => {
  res.render('register.ejs');
})

app.get('/secrets', (req,res) => {

  if (req.isAuthenticated()) {
    res.render('secrets.ejs');

  } 
  else {
    console.log('Is Not Authenticated');
    res.render('/login');

  }

})

app.get('/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  })
})


const argon2Config = {
  type:argon2.argon2id,
  memoryCost:2 ** 16,
  timeCost: 5,
  parallelism:1
};

app.post('/register', async (req,res) => {
  
  try {

    let email = req.body.email;
    let password = req.body.password;

    const emailColumn = await db.query(`SELECT email FROM users WHERE email = '${email}';`);
    if(emailColumn.rows.length == 1){

      console.log('Email Already Exist');
      req.redirect('/login');

    } 
    else {
    
      const key = Buffer.from(process.env.AES256_KEY);
      const iv = Buffer.from(process.env.AES256_IV);
      const encryptedPassword = await generateArgon2(generateAES256(password,key,iv).encrypted,argon2Config);
      const user = await db.query(`INSERT INTO users (email,password) VALUES ('${email}','${encryptedPassword}') RETURNING *`);
      
      req.login(user, (err) => {
        if(err){

          console.log('Error on login:',err)

        } 
        else {

          console.log('Successfull Login')
        }

        console.log('Email Created Successfully : ',email);
        res.redirect('/secrets');
      })

    }

  } catch (error) {
    console.log('Error While Registering :',error);
  }

})

// app.post('/login',
//   passport.authenticate('local',{
//     successRedirect: '/secrets',
//     failureRedirect: '/login',
//   })
// )


app.post('/login', async (req,res) => {
  try {
      const email = req.body.email;
      const password = req.body.password;

      const key = Buffer.from(process.env.AES256_KEY);
      const iv = Buffer.from(process.env.AES256_IV);
      const encryptedPassword = generateAES256(password,key,iv).encrypted;
  
      const checkResult = await db.query(`SELECT password FROM users WHERE email = '${email}'`);
      
      if (checkResult.rows.length > 0) {
        const user = checkResult.rows[0];
        const hash = user.password;
        const isHash = await verifyArgon2(hash,encryptedPassword);
  
        if(!isHash) throw 'Password or Email Wrong';
        else console.log(isHash);
  
        req.login(user,(error) => {
          if(error){
            throw error;
          } else {
            console.log('Successfull login');
            res.redirect('/secrets');
          }
        })
      } 
      else {
        console.log('User not Found')
      }


  } catch (error) {
    console.log('Error :',error);
  }

})

passport.use(
  new Strategy(async function verify(username,password,cb){
    try {
      const result = await db.query(`'SELECT * FROM users WHERE email = '${email}'`);

      if (result.rows.length > 0) {
        const user = result.rows[0];
        const hash = user.password;
        const isHash = await verifyArgon2(hash,password);

        if (isHash) return cb(null,user)
        else return cb(null,false)
      }
      else {
        return cb(null, false);
      }

    } catch (error) {
      console.log('Error using Passport.use():',error);
    }
  })
)

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});


app.listen(port, (req,res) => {
  console.log(`Server Listening On Port :${port}`)
})


//  My Functions

//  argon2 start

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


// argon2 end



// AES256 start


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
