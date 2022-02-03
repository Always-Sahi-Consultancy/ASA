const mongoose = require('mongoose');

const courseDetailsSchema = new mongoose.Schema({
    courseName: {
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
    },
    
});

const CourseDetails = mongoose.model('COURSE_DETAILS', courseDetailsSchema);

module.exports = CourseDetails;