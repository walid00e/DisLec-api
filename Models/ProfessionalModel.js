const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professionalSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    patientsList: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    analysedRecord: { type: Number, default: 0 },
    newRecord: { type: Number, default: 0 },
    iveSession: { type: Number, default: 0 }
});

const Professional = mongoose.model('Professional', professionalSchema);
module.exports = Professional;