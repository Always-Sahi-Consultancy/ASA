const mongoose = require('mongoose');

const courseDetailsSchema = new mongoose.Schema({
    courseURL: {
        type: String,
        required: true
    },
    courseBanner: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: false
        },
        video: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        },
        courseDiscountPrice: {  
            type: Number,
            required: true
        },
        courseMRP: {
            type: Number,
            required: true
        }
    },
    objective: [
        {
            type: String
        }
    ],
    highlights: [
        { 
            type: String 
        }
    ],
    accountContent: [
        { 
            name: {
                type: String,
                required: true
            },
            details: [
                {
                    type: String
                }
            ]
        },
    ],
    courseTutor: {
        tutor: {
            type: String,
        },
        qualification: {
            type: String,
        },
        image: {
            type: String,
        }
    }
});

const CourseDetails = mongoose.model('COURSE_DETAILS', courseDetailsSchema);

module.exports = CourseDetails;