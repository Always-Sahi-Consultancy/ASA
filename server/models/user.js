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
    console.log('Hashing the password');
    if(this.isModified('userPassword')){
        this.userPassword = await bcrypt.hash(this.userPassword, 12);
    }
    next();
});

const User = mongoose.model('USER', userSchema);

module.exports = User;