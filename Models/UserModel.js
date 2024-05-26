const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // phoneNumber: { type: Number, required: true },
    // birthDate: { type: Date, required: true },
    // joinDate: { type: Date, default: Date.now },
    // sex: { type: String, required: true },
    password: { type: String, required: true },
    // profilePicture: { type: String }
});

module.exports = mongoose.model('user', userSchema);