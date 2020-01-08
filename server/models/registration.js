const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    registerDate: Date
});

module.exports = mongoose.model('registration', registrationSchema);