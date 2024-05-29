const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const essaySchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    rank: { type: Schema.Types.ObjectId, ref: 'Rank', required: true },
    exercise: { type: Schema.Types.ObjectId, ref: 'Exercise', required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    reviewed: { type: Boolean, required: true, default: false},
    content: { type: String, required: true}
});

const Essay = mongoose.model('Essay', essaySchema);
module.exports = Essay;
