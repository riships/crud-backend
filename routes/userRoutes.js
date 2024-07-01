// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, storeUserData } = require('../controllers/userController');

// Route to get all users
router.get('/', getAllUsers);


router.get('/:id', getUserById);


router.post('/submit_form', storeUserData);

module.exports = router;
