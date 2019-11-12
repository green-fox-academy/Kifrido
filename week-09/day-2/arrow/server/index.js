'use strict';

let express = require('express');
let app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/yondu', function (req, res) {
    let distance = parseInt(req.query.distance);
    let time = parseInt(req.query.time);
    let speed = distance / time;
    if(time == 0 ){
        let speed = "undefined";
        res.json({distance, time, speed}); 
    } else {
    res.status(200);
    res.json({distance, time, speed}); 
    }
});

module.exports = app;