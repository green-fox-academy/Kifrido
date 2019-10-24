const express = require('express');
const app = express();
const PORT = 3000;
let name = 'John';

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Greetings',
        qs: Object.entries(req.query).length == 0 ? {name: "Guest" } :  req.query
      });
    });

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});