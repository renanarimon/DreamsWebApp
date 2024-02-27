const mongoose = require('mongoose')
const schema = mongoose.Schema

// schema of a dream
const dreamSchema = new schema({

    title: {
        type: String,
        require: true,
        validate: {
            validator: (value) => {
                return typeof value === 'string' && value.trim().length > 0;
            },
            message: 'Must be a non-empty string'
        }
    },
    dueDate: {
        type: Number,
        require: true,
        validate: {
            validator: (value) => {
                return typeof value === 'number'
            },
            message: 'Must be a number'
        }
    },

    tools: {
        type: {},
        require: false,
        validate: {
            validator: (value) => {
                if (!Array.isArray(value) || value.length <= 0) {
                    return false;
                }
                return value.every(item => typeof item === 'string')
            }
            , message: 'Invalid value - should be string array'
        }
    },

    steps: {
        type: {},
        require: false,
        validate: {
            validator: (value) => {
                if (!Array.isArray(value) || value.length <= 0) {
                    return false;
                }

                return value.every(item => typeof item === 'string');
            }
            , message: 'Invalid value - should be string array, at least 1 value'
        }
    }
}, { timestamps: true })


// module
module.exports = mongoose.model('dream', dreamSchema) // use the dreams collection, with the sream schema