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
        ]
        }
    ]
});

const CourseEnrolls = mongoose.model('COURSE_ENROLLS', courseEnrollsSchema);

module.exports = CourseEnrolls;