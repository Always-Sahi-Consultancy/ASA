const mongoose = require('mongoose');

// Connection to MongoDB server
const DB = process.env.DATABASE;

mongoose.connect(DB, { 
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
}).then(() => {
    console.log(`Connected to DB`);
}).catch((err) => console.log(`No Connection`));