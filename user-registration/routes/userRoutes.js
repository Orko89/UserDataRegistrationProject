const express = require('express');
const {
    registerUser,
    loginUser,
    getProfile,
    getAllProfiles,
    updateUser,
    deleteUser,
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.get('/all', protect, getAllProfiles);
router.put('/update/:id', protect, updateUser);
router.delete('/delete/:id', protect, deleteUser);

module.exports = router;
