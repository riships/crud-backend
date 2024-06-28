// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../controllers/userController');

// Route to get all users
router.get('/', getAllUsers);


router.get('/:id', getUserById);

module.exports = router;
