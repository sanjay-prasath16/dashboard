const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    onTime: { type: Number, required: true },
    lateAttendance: { type: Number, required: true},
    takeDayOff: { type: Number, reuired: true },
    notPresent: { type: Number, reuired: true }
});

module.exports = mongoose.model('attendance', attendanceSchema);