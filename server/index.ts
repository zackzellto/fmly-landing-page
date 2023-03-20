import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON request bodies
app.use(express.json());

// Define a route that returns a JSON response
app.get('/api/waitlist', (req: Request, res: Response) => {
  res.json({ message: 'Hello, World!' });
});

// Define a route that returns a JSON response
app.get('/api/waitlist/id', (req: Request, res: Response) => {
  res.json({ message: 'Hello, World!' });
});

// Define a route that handles POST requests
app.post('/api/waitlist', (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Email Received!' });
});

// Define a route that handles DELETE requests
app.delete('/api/waitlist/id', (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Email Deleted!' });
});

// Define a route that handles PUT requests
app.put('/api/waitlist/id', (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Email Updated!' });
});

// Start the server
const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
