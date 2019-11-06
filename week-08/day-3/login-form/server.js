'use strict';

const express = require('express');
//const mysql = require('mysql');
const app = express();
//const table = "posts";
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(express.static('assets'));
app.use(bodyParser());
app.use(express.json());
//const env = require('dotenv').config();


// home page
app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.body.username + '\n' + req.body.password);
});

// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});