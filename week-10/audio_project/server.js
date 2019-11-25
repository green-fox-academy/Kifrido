'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('assets'));
app.use(bodyParser());
app.use(express.json());
const env = require('dotenv').config();
const config = require('./config');
app.listen(config.app.port);

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

conn.query('SELECT * FROM audio_player;', function (err, rows) {
    console.log('Data received from Db:\n');
    console.log(rows);
});

//creating get/posts


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/main.html');
})

//Lists all the playlists

app.get('/playlists', function (req, res) {
    req.accepts('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    res.status(200);
    conn.query('SELECT *  FROM playlists;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send({ "playlists": rows});
    });
});

//add new playlist

app.post('/playlists', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json", "text/html");
    res.status(200);
    let sql = `INSERT INTO playlists (playlist) VALUES("${req.body.playlist}")`;
    conn.query(`${sql}`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
})

//delete playlist

app.delete('/playlists/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json", "text/html");
    res.status(200);
    let sql = `DELETE from playlists WHERE id= ${req.params.id} AND sys !=1`;
    conn.query(`${sql}`, function (err, rows) {
        res.setHeader("Content-type", "application/JSON");
        if (req.params.id == undefined || req.params.system == 1) {
            res.status(404);
            console.log("cannot delete");
            res.send("cannot delete");
        } else {
            res.status(200);
            res.send(rows);
        }
    });
})


/*app.get('/add', function (req, res) {
    res.sendFile(__dirname + '/views/addpost.html');
})


app.post('/posts', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json", "text/html");
    res.status(200);
    let sql = `INSERT INTO posts (title, url, timestamp) VALUES("${req.body.title}", "${req.body.url}", ${Date.now()})`;
    let selector= `SELECT * FROM posts ORDER BY id DESC LIMIT 1`;
    conn.query(`${sql}; ${selector}`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.redirect('http://localhost:3000');
    });
})*/
