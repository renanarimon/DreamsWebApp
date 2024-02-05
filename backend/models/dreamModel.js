const mongoose = require('mongoose')
const schema = mongoose.Schema

// schema of a dream
const dreamSchema = new schema({

    title: {
        type: String,
        require: true
    },
    duoDate: {
        type: Number,
        require: true
    },

    tools: {
        type: {},
        require: false,
        validate: {
            validator: (value) => {
                if (!Array.isArray(value)) {
                    return false;
                }
                return value.every(item => typeof item === 'string')
            }
            , message: 'Invalid value - should be string array'
        }
    },

    steps: {
        type: {},
        require: true,
        validate: {
            validator: (value) => {
                if (!Array.isArray(value)) {
                    return false;
                }

                return value.every(item => typeof item === 'string');
            }
            , message: 'Invalid value - should be string array'
        }
    }
}, { timestamps: true })


// module
module.exports = mongoose.model('dream', dreamSchema) // use the dreams collection, with the sream schema