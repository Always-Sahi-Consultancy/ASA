const mongoose = require('mongoose');

const courseEnrolledSchema = new mongoose.Schema({
    userEmail:{
        type: String,
        required: true
    },
    courseEnrolled: {
        courseName: {
            type: String,
            required: true
        },
        dateOfEnrollmnent: {
            type: Date,
            required: true
        },
        videoStatus: [
            {
                type: Number
            }
        ]
    }
});

const courseEnrolled = mongoose.model('COURSEENROLLED', courseEnrolledSchema);

module.exports = courseEnrolled;