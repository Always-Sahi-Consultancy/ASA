const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    courseName: {
        type: 'string'
    },
    courseVideos: [
        {
            videoName: {
                type: 'string'
            },
            videoURL: {
                type: 'string'
            }, 
            module: {
                name: {
                    type: 'string'
                }, 
                content: {
                    type: 'string'
                }
            },
            videoTranscript: {
                type: 'string'
            }, 
            videoResources: [
                {
                    type: 'string'
                }
            ]
        }
    ]
});

const Videos = mongoose.model('VIDEOS', moduleSchema);

module.exports = Videos;