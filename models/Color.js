var mongoose = require('mongoose');

var ColorSchema = new mongoose.Schema({
    concept: {
        type: String,
        required: true
    },
    prerequisites:{
        type: String,
        required: false
    },
    leads:{
        type: String,
        required: false
    }
});

module.exports = ColorSchema;