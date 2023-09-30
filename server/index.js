import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import clientRoute from './routes/client.js';


dotenv.config();

const app = express();


const port = 3000; 

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connected to db");
});

app.use(express.json());

// const clientRoute = require('./routes/client');
app.use('/client', clientRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});