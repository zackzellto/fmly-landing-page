// routes/waitlist.js
const express = require('express');
const router = express.Router();

router.get('/api/waitlist', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.post('/api/waitlist', (req, res) => {
  const email = req.body.email;
  console.log(email);

  const user = new User({ email: email });
  user.save()
    .then(() => {
      console.log('Email saved successfully!');
      res.status(200).send('Email received!');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving email!');
    });
});

router.delete('/api/waitlist/id', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Email Deleted!' });
});

router.put('/api/waitlist/id', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Email Updated!' });
});

module.exports = router;
