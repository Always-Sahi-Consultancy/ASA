const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    couseGroup: {
        type: String,
        required: true
    },
    courseDiscountPrice: {
        type: Number,
        required: true
    },
    courseMRP: {
        type: Number,
        required: true
    },
    courseImage: {
        type: String,
        required: true
    },
    courseTutor: {
        type: String,
        required: true
    },
    
});

const Course = mongoose.model('COURSE', courseSchema);

module.exports = Course;