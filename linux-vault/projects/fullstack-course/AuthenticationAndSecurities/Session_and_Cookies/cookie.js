
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import env from "dotenv";


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

  