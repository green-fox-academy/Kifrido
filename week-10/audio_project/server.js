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

const fs = require('fs');
const mm = require('musicmetadata');

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

//creating get/playlist


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/main.html');
})

//Lists all the playlists

app.get('/playlists', function (req, res) {
    req.accepts('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    conn.query('SELECT *  FROM playlists;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        } else {
            res.status(200);
            res.send({ rows });
        }
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
    console.log(req.params.id);
    if (req.params.id == "undefined") {
        console.log("error");
        res.status(404);
        res.json("no id is given");
    } else {
        let sql = `DELETE from playlists WHERE id= ${req.params.id} AND sys !=1`;
        conn.query(`${sql}`, function (err, rows) {
            res.setHeader("Content-type", "application/JSON");
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            res.send({ "playlists": rows });
        });
    }
})

//List all the tracks in root folder

app.get('/playlist-tracks/', function (req, res) {
    req.accepts('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    res.status(200);
    let tableContent = `SELECT id, title, artist, path FROM tracks WHERE playlist_id = 1;`
    conn.query(tableContent, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
        } else {
            res.send(rows);
        }
    });
});

//List all the tracks added to the playlist

app.get('/playlist-tracks/:playlist_id', function (req, res) {
    req.accepts('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    res.status(200);
    let tableContent = `SELECT id, title, artist, path FROM tracks WHERE playlist_id = "${req.params.playlist_id}";`
    conn.query(tableContent, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        } else {
            res.send(rows);
        }
    });
});


//Add the track to the playlist provided 

app.post('/playlist-tracks/:playlist_id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json", "text/html");
    res.status(200);
    //let path = `SELECT path FROM tracks WHERE id = ${}`;
    //let sql = `INSERT INTO tracks (path, playlist_id) SELECT path FROM tracks WHERE playlist_id=1 VALUES ("${path}", "${req.params.playlist_id}")`;
    conn.query(`${path}`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
})

//Delete the given track

app.delete('/playlist-tracks/:playlist_id?/:track_id?', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json", "text/html");
    let sql = `DELETE from tracks WHERE playlist_id= ${req.params.playlist_id} AND id= ${req.params.track_id}`;
    let selector = `SELECT * FROM tracks WHERE playlist_id= ${req.params.playlist_id} AND id= ${req.params.track_id}`
    conn.query(`${selector}; ${sql}`, function (err, rows) {
        res.setHeader("Content-type", "application/JSON");
        if (err) {
            console.log(err.toString());
            res.status(500).send('Please provide a track and a playlist id');
            return;
        } else if (rows[0].length == 0) {
            res.status(403);
            res.send(JSON.stringify({ 'err': 'Please provide a valid track id and a playlist id.' }));
        } else {
            res.status(200);
            res.send({ "playlists": rows[0] });
        }
    });
})
