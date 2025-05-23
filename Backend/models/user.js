const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  userType: { type: String, enum: ['user', 'professional', 'admin'] },
  profession: String,
  adminCode: String,
});

module.exports = mongoose.model('User', userSchema);
