import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import clientRoute from "./routes/client.js";
import cors from "cors";
import bodyParser from "body-parser";


dotenv.config();

const app = express();

const port = 3000;

// Allow requests from http://localhost:3001
const corsOptions = {
    origin: '*',
    
    
  };

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("connected to db");
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
// app.use(express.json());

// const clientRoute = require('./routes/client');
app.use("/client", clientRoute);

app.listen(port, () => {
  console.log(`Example app listening at ${process.env.HOSTNAME}${port}`);
});
