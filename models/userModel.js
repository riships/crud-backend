const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
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
}, {
    collection: 'users', // Updated collection name
    versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;
