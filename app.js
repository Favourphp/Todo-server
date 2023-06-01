const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');
const port = 3000

const app = express();
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(bodyparser.json({type: 'application/*+json'}))

app.get('/',(req, res) =>{
    res.send('hello world!')
});

app.get('/about',(req, res) =>{
    res.send('this is the about page')
});

app.listen(port, () => {
    console.log(`server started on ${port}`)
});