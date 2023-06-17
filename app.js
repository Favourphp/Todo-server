const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');
const connectDB = require('./db/connect')
require('dotenv').config()


const app = express();
app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(express.static("public"));
 app.set("view engine", "ejs");
// app.use(bodyparser.json({type: 'application/*+json'}))



app.use(require("./route/index"))
app.use(require("./route/todo"))

const port = process.env.PORT || 5000;

const start = async() => {
    try {
        // connect to DB 
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
       console.log(error) 
    }
}

 start()