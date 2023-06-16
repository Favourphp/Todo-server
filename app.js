const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');
const port = 3000

const app = express();
app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(express.static("public"));
 app.set("view engine", "ejs");
// app.use(bodyparser.json({type: 'application/*+json'}))





mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



app.use(require("./route/index"))
app.use(require("./route/todo"))

app.listen(port, () => {
    console.log(`server started on ${port}`)
});