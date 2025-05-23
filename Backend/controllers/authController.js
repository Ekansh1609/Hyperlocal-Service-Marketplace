const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

// Register
exports.signup = async (req, res) => {
  try {
    const { name, email, phone, password, userType, profession, adminCode } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      userType,
      profession: userType === 'professional' ? profession : '',
      adminCode: userType === 'admin' ? adminCode : '',
    });

    await user.save();

    const token = jwt.sign({ id: user._id, userType: user.userType }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      userType: user.userType,
    });

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    const mappedType = userType === 'customer' ? 'user' : userType;
    console.log('Login attempt:', { email, mappedType });

    const user = await User.findOne({ email, userType: mappedType });
    console.log('User found:', user);

    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const token = jwt.sign({ id: user._id, userType: user.userType }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};
