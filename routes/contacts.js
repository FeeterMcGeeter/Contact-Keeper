const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   GET ALL USER'S CONTACTS
// @access PRIVATE
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route  POST api/contacts
// @desc   ADD NEW CONTACTS
// @access PRIVATE
router.post('/', (req, res) => {
    res.send('Add contact');
});

// @route  PUT api/contacts/:id
// @desc   UPDATE CONTACT
// @access PRIVATE
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route  DELETE api/contacts
// @desc   DELETE CONTACT
// @access PRIVATE
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;