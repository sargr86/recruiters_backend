const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/get-one', usersController.getOne);

module.exports = router;
