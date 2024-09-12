const mongoose = require('mongoose');

const careGiver = new mongoose.Schema({
  Registered: { type: Number, required: true },
  Active: { type: Number, required: true },
  Inactive: { type: Number, required: true }
});

module.exports = mongoose.model('care', careGiver);