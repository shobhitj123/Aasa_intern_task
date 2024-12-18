// Import required modules
const mysql = require('mysql2');
require('dotenv').config(); // To read environment variables from .env file

// Create a connection to the database using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,        // e.g., 'localhost'
  user: process.env.DB_USER,        // e.g., 'root'
  password: process.env.DB_PASSWORD, // The actual password you set for MySQL root user
  database: process.env.DB_NAME,    // e.g., 'weather_app'
  port: process.env.DB_PORT         // Default MySQL port (3306)
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database: ', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Export the connection object to be used in other files
module.exports = db;
