const express = require('express');
const router = express.Router();

// @route  GET api/auth
// @desc   GET LOGGED IN USER
// @access PRIVATE
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// @route  POST api/auth
// @desc   AUTH USER & GET TOKEN
// @access PUBLIC
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;