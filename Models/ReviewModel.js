const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    essayId: { type: Schema.Types.ObjectId, ref: 'Essay', required: true },
    professionalId: { type: Schema.Types.ObjectId, ref: 'Professional', required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    evaluation: { type: String, required: true }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
