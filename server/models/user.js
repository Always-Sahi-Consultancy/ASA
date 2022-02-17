const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    userFirstName: { 
        type: String, 
        required: true 
    },
    userLastName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userEmailVerified: {
        type: Boolean,
        default: false
    },
    userRegistrationDate: {
        type: Date,
        default: Date.now
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

// Hashing the password
userSchema.pre('save', async function(next){
    console.log('Hashing the password');
    if(this.isModified('userPassword')){
        this.userPassword = await bcrypt.hash(this.userPassword, 12);
    }
    next();
});

// Token generation
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        console.log("Token generated");
        return token;
    }catch(err){
        console.log(err);
    }
};

const User = mongoose.model('USERS', userSchema);

module.exports = User;