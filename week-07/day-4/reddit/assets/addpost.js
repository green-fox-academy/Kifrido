'use strict';

const express = require('express');
const app = express();
/*const port = 3000;*/
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser());

let title = document.getElementById("title");
console.log("title");

title.addEventListener("input", function (event) {
    if (title.validity.typeMismatch) {
        title.setCustomValidity("Looser Uuuser");
    } else {
        title.setCustomValidity("");
    }
});

/*app.get('/', (req, res) => res.sendfile('index.html'));*/

app.post('/posts', (req, res) => console.log(req.body.title));


let url = document.getElementById("url");

url.addEventListener("input", function (event) {
    if (url.validity.typeMismatch) {
        url.setCustomValidity("Looser Uuuser");
    } else {
        url.setCustomValidity("");
    }
})

app.post('/posts', (req, res) => console.log(req.body.url));

/*app.listen(port, () => console.log(`Example app listening on port ${port}!`));*/