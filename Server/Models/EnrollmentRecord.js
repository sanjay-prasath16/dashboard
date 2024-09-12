const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    enroll: { type: String, required: true },
    count: { type: Number, required: true }
});

module.exports = mongoose.model('enrollment', enrollmentSchema);