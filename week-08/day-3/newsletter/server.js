'use strict';


const express = require('express');
const app = express();
const path = require('path');
//const PORT = 3000;
const bodyParser = require('body-parser');
app.use(express.static('assets'));
app.use(bodyParser());
app.use(express.json());
const config = require('./config');
app.listen(config.app.port);

// home page
app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/signup', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(`<h1>Thanks ${req.body.username}, we will send updates to ${req.body.email}</h1>`);
});