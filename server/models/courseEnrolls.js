const mongoose = require('mongoose');

const courseEnrollsSchema = new mongoose.Schema({
    userEmail:{
        type: String,
        required: true
    },
    courseEnrolled: [
        {
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
        ],
        firstVideo: {
            type: String,
            required: true
        }
        }
    ]
});

const CourseEnrolls = mongoose.model('COURSE_ENROLLS', courseEnrollsSchema);

module.exports = CourseEnrolls;