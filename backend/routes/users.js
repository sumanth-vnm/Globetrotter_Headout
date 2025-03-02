const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create new user
router.post('/', async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update user score
router.patch('/:username/score', async (req, res) => {
  try {
    const { correct } = req.body;
    const user = await User.findOne({ 
      where: { username: req.params.username }
    });
    
    if (correct) {
      user.scoreCorrect += 1;
    } else {
      user.scoreIncorrect += 1;
    }
    user.gamesPlayed += 1;
    
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get user details
router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username }
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Format response to match previous MongoDB structure
    res.json({
      username: user.username,
      score: {
        correct: user.scoreCorrect,
        incorrect: user.scoreIncorrect
      },
      gamesPlayed: user.gamesPlayed
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 