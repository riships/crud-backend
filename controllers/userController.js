// controllers/userController.js

const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ "userData": users });
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const getUserById = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        res.json({ "userData": [users] });
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};


const storeUserData = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({ message: 'User data saved successfully' });
    } catch (error) {
        console.error('Error saving user data:', error);
        if (error.name === 'ValidationError') {
            // Handle Mongoose validation errors
            res.status(400).json({ message: error.message });
        } else {
            // Handle other types of errors
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    storeUserData
};
