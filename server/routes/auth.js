const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../database/connect');
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('Hello world this is server! from router');
});

// using promises
/*
router.post('/register', (req, res) => {
    const { userEmail, userPassword, userEmailVerified, userHash } = req.body;

    if(!userEmail || !userPassword || !userEmailVerified || !userHash){
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    User.findOne({ userEmail: userEmail })
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new User({ userEmail, userPassword, userEmailVerified, userHash });
        user.save().then(() => {
            res.status(201).json({ message: "User created successfully" });
        }).catch((err) => res.status(500).json({ error: "Failed to Register" }));
    }).catch(err => {console.log(err);});   
})
*/

// using async-await
router.post('/register', async (req, res) => {
    const { userEmail, userPassword, userFirstName, userLastName } = req.body;

    if(!userEmail || !userPassword || !userFirstName || !userLastName){
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    try{
        const userExist = await User.findOne({ userEmail: userEmail });
        if(userExist){
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new User({ userEmail, userPassword, userFirstName, userLastName });
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    }catch(err){
        console.log(err);
    }
});

router.post('/signin', async (req, res) => {
    const { userEmail, userPassword } = req.body;

    if(!userEmail || !userPassword){
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    try{
        const userLogin = await User.findOne({ userEmail: userEmail });
        if(userLogin){
            const isMatch = await bcrypt.compare(userPassword, userLogin.userPassword);
            const token = await userLogin.generateAuthToken();
            res.cookie('jwtoken', token, { 
                expires: new Date(Date.now() + 2592000000), //1hr = 3600000, 1day = 86400000, 1week = 604800000, 1month = 2592000000, 1year = 31536000000
                httpOnly: true
            });

            if(isMatch){
                return res.status(200).json({ message: "User logged in successfully" });
            }else{
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        }else{
            return res.status(422).json({ error: "Email does not exist" });
        }
    }catch(err){
        console.log(err);
    }
});

// About us Page
router.get('/dash', authenticate, (req, res) => {
    console.log('Dash page');
    res.send(req.rootUser);
});

module.exports = router;