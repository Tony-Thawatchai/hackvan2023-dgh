import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";
// import clientRouter from "./routes/client.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const port = 3000;

// Allow requests from http://localhost:3001
const corsOptions = {
    // TODO: CORS policy should be more restrictive in production
    origin: '*'
    
  };
// hola amiko
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("connected to db");
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const clientRoute = require('./routes/client');
app.use("/", router);
// app.use("/client", clientRouter);

app.listen(port, () => {
  console.log(`Example app listening at ${process.env.HOSTNAME}${port}`);
});
