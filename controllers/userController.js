// controllers/userController.js
const User = require('../models/userModel');


/* Get data of all users */
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ "userData": users });
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};


/* Get data of a user by id*/
const getUserById = async (req, res) => {
    try {
        let userId = req.params.userId
        const users = await User.findById(userId);
        res.json({ "userData": [users] });
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};



/* Store data of a user */
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


/* Delete data of a user by id */
const deleteUserData = async (req, res) => {
    try {
        const users = await User.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'User data Deleted successfully' });
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    storeUserData,
    deleteUserData
};
