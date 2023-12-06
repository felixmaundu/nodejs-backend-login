const authService = require('../services/auth.service');

exports.register = async (req, res) => {
  try {
    const { username, email, country, profilephoto, password } = req.body;
    const user = await authService.registerUser(
      username,
      email,
      country,
      profilephoto,
      password
    );
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginUser(email, password);
    res.cookie('accessToken', token, { httpOnly: true });
    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
