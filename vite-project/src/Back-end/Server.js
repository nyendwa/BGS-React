// server.js
const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

// User authentication endpoints
app.post('/api/register', (req, res) => {
  // Handle user registration and insert into MySQL database
});

app.post('/api/login', (req, res) => {
  // Handle user login and generate JWT token
});

// API endpoint to fetch user data
app.get('/api/dashboard', (req, res) => {
  const authToken = req.headers.authorization.split(' ')[1];
  // Verify the JWT token
  jwt.verify(authToken, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    // Fetch user data from MySQL database based on the decoded user ID
    db.query('SELECT * FROM users WHERE id = ?', [decoded.userId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching user data' });
      }
      res.json(results[0]);
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
