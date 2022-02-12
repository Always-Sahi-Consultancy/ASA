const mongoose = require('mongoose');

const courseDetailsSchema = new mongoose.Schema({
    courseURL: {
        type: String
    },
    courseBanner: {
        title: {
            type: String
        },
        subtitle: {
            type: String
        },
        rating: {
            type: Number
        },
        video: {
            type: String
        },
        link: {
            type: String
        },
        courseDiscountPrice: {  
            type: Number
        },
        courseMRP: {
            type: Number
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
    content: [
        { 
            name: {
                type: String
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