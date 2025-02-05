import dotenv from 'dotenv';
dotenv.config({ path: 'env/.env' });

const express = require("express");
const http = require("http");;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const mongoose = require("mongoose");
//import router from "../routes/config";

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


mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (error : Error) => console.log(error));
 
//app.use('/', router())