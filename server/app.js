const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
const PORT = process.env.PORT;

require('./database/connect');

app.use(express.json());

const User = require('./models/user');

app.use(require('./routes/auth'));

// Middleware
const middleware = (req, res, next) => {
    console.log('Middleware');
    next();
};

app.get('/', (req, res) => {
    res.send('Hello world this is server!');
});
app.get('/about', middleware, (req, res) => {
    console.log('About page');
    res.send('inside about');
});
app.get('/contact', (req, res) => {
    res.send('inside contact');
});
app.get('/signin', (req, res) => {
    res.send('inside signin');
});
app.get('/signup', (req, res) => {
    res.send('inside signup');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})