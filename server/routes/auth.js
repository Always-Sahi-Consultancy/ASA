const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../database/connect');
const User = require('../models/user');
const Course = require('../models/course');
const CourseDetails = require('../models/courseDetails');
const Modules = require('../models/module');

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
    
    try{
        const { userEmail, userPassword } = req.body;

        if(!userEmail || !userPassword){
            return res.status(422).json({ error: "Please fill all the fields" });
        }

        const userLogin = await User.findOne({ userEmail: userEmail });
        if(userLogin){
            const isMatch = await bcrypt.compare(userPassword, userLogin.userPassword);
            const token = await userLogin.generateAuthToken();
            console.log(token);
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

// Dashboard Page
router.get('/dash', authenticate, async (req, res) => {
    console.log('Dash page');
    const course = await Course.find();
    if(!course){
        console.log('Course not found');
    }
    req.course = course;
    // res.send(req.rootUser, req.course);
});

// Contact Form
router.get('/contact', authenticate, (req, res) => {
    console.log('Contact page');
    res.send(req.rootUser);
});

// Logout
router.get('/logout', (req, res) => {
    console.log('Logout'); 
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send('Logged out successfully');
});

// Course Page
router.get('/course', async (req, res) => {
    console.log('Course page');
    const course = await Course.find();
    if(!course){
        console.log('Course not found');
    }
    res.send(course);
});

router.get('/coursedetails/:course_id', async (req, res) => {
    console.log('Individual Course page');
    const courseDetails = await CourseDetails.findOne({courseURL: req.params.course_id});
    if(!courseDetails){
        console.log('Course Details not found');
    }
    res.send(courseDetails);
});

router.get('/module', async (req, res) => {
    console.log('Module page');
    const module = await Modules.find();
    if(!module){
        console.log('Module not found');
    }
    res.send(module);
});

module.exports = router;