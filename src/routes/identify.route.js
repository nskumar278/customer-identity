const router = require('express').Router();
const identifyController = require('../controller/identify.controller');

router.post('/', identifyController.identifyContact);

module.exports = router;
