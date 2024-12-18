const axios = require('axios');
const WeatherLog = require('../models/weatherLog');
const db = require('../config/db');

const getWeather = (req, res) => {
  const { city } = req.query;
  const userId = req.user.id;  // User ID from JWT token

  axios.get(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${city}`)
    .then(response => {
      const weatherData = response.data;
      WeatherLog.create(userId, city, weatherData, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(weatherData);
      });
    })
    .catch(err => res.status(500).json({ error: 'Failed to fetch weather data' }));
};

const getReport = (req, res) => {
  WeatherLog.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

module.exports = { getWeather, getReport };
