'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.use('/static', express.static('static'));

const cocktails = [
    { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
    { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
    { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
    { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
    { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
    { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
    { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
    { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
  ];

  const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

// set the view engine to ejs
app.set('view engine', 'ejs');

// home

app.get('/', (req, res) => {
    let filteredCocktails = cocktails.filter(item => {
        return item.contains.includes (req.query.alcohol)
    });
    res.render('home', {
        title: 'Cocktails',
        h1: 'Cocktails',
        alcoholList: alcoholList,
        cocktails: Object.entries(req.query).length == 0 ? cocktails : filteredCocktails
      });
    });

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});