const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professionalSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    patientsList: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    analysedRecord: { type: Number, default: 0 },
    newRecord: { type: Number, default: 0 },
    liveSession: { type: Number, default: 0 },
    essayToReview: { type: String, default: ''},
    reviewedEssay: { type: String, default: ''}
});

const Professional = mongoose.model('Professional', professionalSchema);
module.exports = Professional;