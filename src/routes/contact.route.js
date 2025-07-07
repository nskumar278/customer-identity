const router = require('express').Router();
const contactsController = require('../controller/contact.controller');

router.post('/', contactsController.createContact);
router.get('/', contactsController.getAllContacts);

module.exports = router;