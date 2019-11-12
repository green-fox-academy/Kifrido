const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    let message = req.query.message;
    res.status(200);
    if(message){
        res.json({ received: message, translated: 'I am Groot!' });  
    } else {
        res.json({error: "I am Groot!"});
    }
});

module.exports = app;