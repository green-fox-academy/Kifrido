'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
app.use(express.static('assets'));
app.use(bodyParser.json())

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

app.post('/dountil/:action', (req, res) => {
    let number = req.body.until;
    let dountil = {};
    console.log(req.body.until);
    if (req.params.action === 'factor') {
        dountil['result'] = factorio(number);
    } else if (req.params.action === 'sum') {
        dountil['result'] = sum(number);
    } else {
        dountil["error"] = "Please provide a number!";
    }
    res.send(dountil);
})

function factorio(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
function sum(num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
        total += i;
    }
    return total;
}

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});