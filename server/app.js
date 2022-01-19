const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connection to MongoDB server
const DB = 'mongodb+srv://as_academy:Azcz65LTU_Wt3m@cluster0.0kuxo.mongodb.net/as_academy?retryWrites=true&w=majority';

mongoose.connect(DB, { 
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
}).then(() => {
    console.log(`Connected to DB`);
}).catch((err) => console.log(`No Connection`));

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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})