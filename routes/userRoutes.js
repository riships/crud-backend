// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, storeUserData, deleteUserData, updateUserData } = require('../controllers/userController');

// Route to get all users
router.get('/', getAllUsers);


router.get('/getUser', getUserById);


router.post('/submit_form', storeUserData);

router.delete('/deleteUser/:id', deleteUserData);

router.put('/updateUser/:id', updateUserData);

module.exports = router;
