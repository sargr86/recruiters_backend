const express = require('express');
const router = express.Router();
const countiesController = require('../controllers/countiesController');

router.get('/get', countiesController.get);
router.get('/get-by-state', countiesController.getByState);

module.exports = router;
