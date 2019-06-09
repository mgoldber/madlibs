'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordsSchema = new Schema({
    number_1: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    foreign_country: {
        type: String,
        required: true,
        enum: ['USA', 'India', 'China', 'England']
    },
    adverb: {
        type: String,
        required: true
    },
    ing_verb_1: {
        type: String,
        required: true
    },
    body_part_1: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Words', wordsSchema);