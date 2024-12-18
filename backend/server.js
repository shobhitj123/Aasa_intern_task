// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db'); // Import the database connection

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:5500',  // Allow your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Allow cookies and other credentials
}));
app.use(bodyParser.json()); // Parse incoming JSON requests

// Test MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Sample route to check if server is running
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Add additional routes here (e.g., for login, signup, weather)
app.post('/login', (req, res) => {
  // Your login logic here (JWT authentication, etc.)
  res.send('Login route');
});

app.post('/signup', (req, res) => {
  // Your signup logic here
  res.send('Signup route');
});

// Add more routes for weather information, etc.
// Example of weather route
app.get('/weather/:city', (req, res) => {
  const city = req.params.city;
  // Fetch weather information for the city using weather API (e.g., weatherstack)
  res.send(`Weather data for ${city}`);
});

// Server setup and listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
