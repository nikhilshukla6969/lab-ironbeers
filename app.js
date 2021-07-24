const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

// call the getBeers() method which returns a promise that should be resolved with an array of 25 beers.
app.get('/beers', (req, res) => {
  punkAPI.getBeers().then(apiResponse => {
    res.render('beers', { apiResponse });
  });
});


app.get('/random-beer', (req, res) => {
  punkAPI
    .getRandom()
    .then(apiResponse => res.render('random-beer', { apiResponse }));
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
