const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route  GET api/contacts
// @desc   GET ALL USER'S CONTACTS
// @access PRIVATE
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.error(err.messsage);
        res.status(500).send('Server error');
    }
});

// @route  POST api/contacts
// @desc   ADD NEW CONTACTS
// @access PRIVATE
router.post('/', [auth, [
    check('name', 'Name is required')
        .not()
        .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();

        res.json(contact);
    } catch (err) {
        console.error(err.messsage);
        res.status(500).send('Server error');
    }
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