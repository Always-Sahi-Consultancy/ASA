const jwt = require('jsonwebtoken');
const User = require('../models/user');

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, 'tokens.token': token });
        // console.log('RootUser'+rootUser);
        if (!rootUser) { throw new Error('User not found');}
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    } catch (error) {
        res.status(400).send('Unathorized: No token provided');
        console.log(error);
    }
}

module.exports = Authenticate;