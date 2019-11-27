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
    res.status(200);
    conn.query('SELECT *  FROM playlists;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send({ "playlists": rows });
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

// create a new parser from a node ReadStream


/*parser.on('TLEN', function (result) {
    console.log(result);
});*/


mm(fs.createReadStream('assets/music/Ars_Sonor_-_02_-_Never_Give_Up.mp3'), { duration: true }, function (err, metadata) {

});

//List all the tracks added to the playlist

app.get('/playlist-tracks/:playlist_id', function (req, res) {
    req.accepts('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    res.status(200);
    let tableContent = `SELECT id, path FROM tracks WHERE playlist_id = "${req.params.playlist_id}";`

    let parser = mm(fs.createReadStream('assets/music/Ars_Sonor_-_02_-_Never_Give_Up.mp3'), function (err, metadata) {
        if (err) throw err;
        console.log(metadata);
        conn.query(tableContent, function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            } else {
                rows.forEach(element => {
                    Object.assign(element, {
                        "title": metadata.title, "artist": metadata.artist,
                        "duration": metadata.duration
                    });
                });
                res.send(rows);
            }
        });
    });
});

