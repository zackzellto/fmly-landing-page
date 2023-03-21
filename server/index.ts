require('esm')(module);
import express from 'express';
import path from 'path';

// Create a new express application instance
const app: express.Application = express();



// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON request bodies
app.use(express.json());

// Define a route that returns a JSON response
app.get('/api/waitlist', (req, res) => {
  req.get('Content-Type');  // => "application/json"
  res.json({ message: 'Hello, World!' });
});

// Define a route that returns a JSON response
app.get('/api/waitlist/id', (req, res) => {
  req.get('Content-Type');  // => "application/json"
  res.json({ message: 'Hello, World!' });
});

// Define a route that handles POST requests
app.post('/api/waitlist', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Email Received!' });
});

// Define a route that handles DELETE requests
app.delete('/api/waitlist/id', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Email Deleted!' });
});

// Define a route that handles PUT requests
app.put('/api/waitlist/id', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Email Updated!' });
});

// Start the server
const port = 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
