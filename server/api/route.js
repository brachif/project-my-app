const express = require('express');
const router = express.Router();

const{
    getAllUsers,
    signup, 
} = require('../controllers/users');

router.get('/', getAllUsers);
router.post('/signup', signup);

module.exports = router;