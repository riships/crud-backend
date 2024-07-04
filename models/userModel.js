const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
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
