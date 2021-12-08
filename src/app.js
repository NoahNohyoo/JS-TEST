'USE STRICT';

// Module
const express = require('express');
const app = express();

// Routing
const home = require('./routes/home');

// setting app
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home); // middleWare(use)

module.exports = app;