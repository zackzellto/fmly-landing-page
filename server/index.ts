require('esm')(module);
import express from 'express';
const cors = require("cors");
import path from 'path';

const app: express.Application = express();

app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
  origin: "*",
  allowedHeaders: "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post("/WaitlistSignup", (req, res) => {
  const email = req.body.email;
  console.log(email);
  res.status(200).send("Email received!");
});

const port = 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
