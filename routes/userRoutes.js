const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const userController = require('../controllers/userController');

router.get('/getAllUsers', (req, res) => {
    return new Promise((resolve, reject) => {
        User.find({})
            .then(users => res.status(200).json(users))
            .catch((err) => reject(err));
    });
});

router.post('/register', userController.register);

router.post('/login', userController.login);

router.put('/updateProfile/:id', userController.updateProfile);

router.delete('/deleteProfile/:id', userController.deleteProfile)

module.exports = router;
