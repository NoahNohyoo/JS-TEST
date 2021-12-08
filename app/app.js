'USE STRICT';

// Module
const express = require('express');
const app = express();

// Routing
const home = require('./src/routes/home');

// setting app
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home); // middleWare(use)

module.exports = app;