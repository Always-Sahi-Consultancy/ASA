const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    courseVideos: [
        {
            videoName: {
                type: String
            },
            videoURL: {
                type: String
            }, 
            module: {
                name: {
                    type: String
                }, 
                content: {
                    type: String
                }
            },
            videoTranscript: {
                type: String
            }, 
            videoResources: [
                {
                    type: String
                }
            ]
        }
    ]
});

const Videos = mongoose.model('VIDEOS', videoSchema);

module.exports = Videos;