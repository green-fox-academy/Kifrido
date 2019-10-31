'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const table = "book_mast";
//const path = require('path');
const PORT = 3000;
//const bodyParser = require('body-parser');
app.use(express.static('assets'));
//app.use(bodyParser.json())
app.use(express.json());
const env = require('dotenv').config();

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

conn.query('SELECT * FROM book_mast;', function (err, rows) {
    console.log('Data received from Db:\n');
    console.log(rows);
});

app.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    conn.query('SELECT book_name FROM book_mast;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

//All books with full data

app.get('/fulldata', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price  FROM book_mast, author, category, newpublisher  WHERE (book_mast.aut_id = author.aut_id AND book_mast.pub_id = newpublisher.pub_id AND book_mast.cate_id = category.cate_id);', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});

//add filters

app.get('/books', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/JSON");
    res.status(200);
    conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price  FROM book_mast, author, category, newpublisher  WHERE (book_mast.aut_id = author.aut_id AND book_mast.pub_id = newpublisher.pub_id AND book_mast.cate_id = category.cate_id AND cate_descrip = "${req.query.category}" );`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

