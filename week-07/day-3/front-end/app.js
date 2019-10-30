'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let doubling = {};
    res.status(200);
    res.setHeader("Content-type", "application/JSON");
    if (req.query.input !== undefined) {
        doubling['received'] = req.query.input;
        doubling['result'] = req.query.input * 2;
    } else {
        doubling = {
            "error": "Please provide an input!"
        }
    }
    res.send(doubling);
})

app.get('/greeter', (req, res) => {
    let greeter = {};
    console.log(req.query.name);
    res.status(200);
    res.setHeader("Content-type", "application/JSON");
    if (req.query.name !== undefined && req.query.title !== undefined) {
        greeter['welcome_message'] = "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!";
    } else if (req.query.name == undefined && req.query.title !== undefined) {
        greeter["error"] = "Please provide a name!"
    } else if (req.query.name !== undefined && req.query.title == undefined) {
        greeter["error"] = "Please provide a title!"
    } else {
        greeter["error"] = "Please provide a name and a title!"
    }
    res.send(greeter);
})

app.get('/appenda/:appendable', (req, res) => {
    let appenda = {};
    res.setHeader("Content-type", "application/JSON");
    if (req.params.appendable == undefined) {
        res.status(404);
    } else {
        res.status(200);
        appenda['appended'] = req.params.appendable + "a";
    }
    res.send(appenda);
})


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});