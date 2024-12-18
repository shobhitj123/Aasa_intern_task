const db = require('../config/db');

const WeatherLog = {
  create: (userId, city, weatherData, callback) => {
    const query = 'INSERT INTO weather_logs (user_id, city, weather_data) VALUES (?, ?, ?)';
    db.query(query, [userId, city, JSON.stringify(weatherData)], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM weather_logs';
    db.query(query, callback);
  }
};

module.exports = WeatherLog;
