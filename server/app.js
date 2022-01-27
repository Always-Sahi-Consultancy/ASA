const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser())

dotenv.config({path: './config.env'});
const PORT = process.env.PORT;

require('./database/connect');

app.use(express.json());

const User = require('./models/user');
const Course = require('./models/course');

app.use(require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello world this is server!');
});
// app.get('/contact', (req, res) => {
//     res.send('inside contact');
// });
app.get('/signin', (req, res) => {
    res.send('inside signin');
});
app.get('/signup', (req, res) => {
    res.send('inside signup');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})