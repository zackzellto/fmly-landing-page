const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

const user = new User({ email: 'john@example.com' });
user.save(function(err) {
  if (err) return console.error(err);
  console.log('User saved successfully!');
});
