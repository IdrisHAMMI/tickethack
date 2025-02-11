//import dotenv from 'dotenv';
//dotenv.config({ path: 'env/.env' });

import express from "express";
import http from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from "mongoose";
import router from "./routes/config";

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
}));


app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
})

const MONGODB_URI = "mongodb+srv://hammiidris:j2c1ivpAj5JIu7Dd@cluster0.gudaofb.mongodb.net/tickethack"

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
mongoose.connection.on('error', (error : Error) => console.log(error));

app.use('/', router())