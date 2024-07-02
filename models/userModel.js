const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    }
}, { collection: 'usersdatas', versionKey: false });

const User = mongoose.model('usersdata', userSchema);

module.exports = User;
