const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
    userEmailVerified: {
        type: Boolean,
        default: false,
    },
    userHash: {
        type: String,
        required: true,
    }
});

// Hashing the password
userSchema.pre('save', async function(next){
    if(this.isModified('userPassword')){
        this.userPassword = bcrypt.hash(this.userPassword, 12);
    }
    next();
});

const User = mongoose.model('USERS', userSchema);

module.exports = User;