const express = require('express');
const router = express.Router();
const { getWeather, getReport } = require('../controllers/weather');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/weather', authMiddleware, getWeather);
router.get('/report', authMiddleware, getReport);

module.exports = router;
