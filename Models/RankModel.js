const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    content: { type: String },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
});

const rankSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    img: {type: String, required: true},
    exercises: [exerciseSchema]
});

const Rank = mongoose.model('Rank', rankSchema);
module.exports = Rank;
