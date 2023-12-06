// services/auth.service.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

async function registerUser(username, email, country, profilephoto, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    country,
    profilephoto,
    password: hashedPassword,
  });
  return user;
}

async function loginUser(email, password) {
  const user = await User.findOne({
    where: { email },
  });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ userId: user.id }, 'your_secret_key', {
    expiresIn: '24h',
  });
  return token;
}

module.exports = {
  registerUser,
  loginUser,
};
