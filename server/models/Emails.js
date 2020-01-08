
const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailSchema = new Schema({
    email: String,
    name: String
});
module.exports = mongoose.model('emails', emailSchema);