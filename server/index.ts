const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON request bodies
app.use(express.json());

// Define a route that returns a JSON response
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Define a route that handles POST requests
app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Data received!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
