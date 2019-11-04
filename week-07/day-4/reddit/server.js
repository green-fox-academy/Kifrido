'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
//const table = "posts";
//const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(express.json());
const env = require('dotenv').config();

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
        res.send(rows);
    });
});

//creating post posts 

app.post('/posts', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/JSON");
    res.status(200);
    let sql = `INSERT INTO posts (title, url, timestamp) VALUES("${req.body.title}", "${req.body.url}", NOW())`;
    let selector= `SELECT * from posts WHERE title = "${req.body.title}" `;
    conn.query(`${sql}; ${selector}`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
})


//adding put request upvote
app.put('/posts/:id/upvote', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/JSON");
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
        res.send(rows);
    });
})

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});
