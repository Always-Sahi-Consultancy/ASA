const express = require('express');
const router = express.Router();

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
    const { userEmail, userPassword, userEmailVerified, userHash } = req.body;

    if(!userEmail || !userPassword || !userEmailVerified || !userHash){
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    try{
        const userExist = await User.findOne({ userEmail: userEmail });
        if(userExist){
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new User({ userEmail, userPassword, userEmailVerified, userHash });
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
        if(!userLogin){
            return res.status(422).json({ error: "Email does not exist" });
        }
        if(userLogin.userPassword !== userPassword){
            return res.status(422).json({ error: "Password is incorrect" });
        }
        res.status(200).json({ message: "User logged in successfully" });
    }catch(err){
        console.log(err);
    }
});

module.exports = router;