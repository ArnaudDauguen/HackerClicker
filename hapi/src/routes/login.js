const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.tryLogin);

module.exports = router;