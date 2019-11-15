'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
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

conn.query('SELECT * FROM reddit;', function (err, rows) {
    console.log('Data received from Db:\n');
    console.log(rows);
});

//creating get/posts


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/add', function (req, res) {
    res.sendFile(__dirname + '/views/addpost.html');
})

app.get('/posts', function (req, res) {
    req.accepts('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    res.status(200);
    conn.query('SELECT *  FROM posts;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send({ "posts": rows});
    });
});

//creating post posts 

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
})

//adding put request upvote
app.put('/posts/:id/upvote', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    res.status(200);
    let sql = `UPDATE posts SET score = score + 1 WHERE id = "${req.params.id}"`;
    let selector= `SELECT * from posts WHERE id = ${req.params.id} `;
    conn.query(`${sql}; ${selector}`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
})

//adding put request downvote

app.put('/posts/:id/downvote', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/JSON");
    res.status(200);
    let sql = `UPDATE posts SET score = score - 1 WHERE id = "${req.params.id}"`;
    let selector= `SELECT * from posts WHERE id = ${req.params.id} `;
    conn.query(`${sql}; ${selector}`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows[1]);
    });
})
