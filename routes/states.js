const express = require('express');
const router = express.Router();
const statesController = require('../controllers/statesController');

router.get('/get', statesController.get);

module.exports = router;
