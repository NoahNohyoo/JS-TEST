'USE STRICT';

// Module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Routing
const home = require('./src/routes/home');

// setting app
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// fix for space or othere languages
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', home); // middleWare(use)

module.exports = app;