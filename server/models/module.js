const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    courseIndex: [
        {
            name: {
                type: String
            },
            details: [
                {
                    info: {
                        type: String
                    },
                    image: {
                        type: String
                    }
                }
            ]
        }
    ]
});

const Modules = mongoose.model('MODULES', moduleSchema);

module.exports = Modules;