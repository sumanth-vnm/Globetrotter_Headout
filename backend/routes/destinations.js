const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');
const { Op } = require('sequelize');

// Get random destination with clues
router.get('/random', async (req, res) => {
  try {
    const count = await Destination.count();
    const random = Math.floor(Math.random() * count);
    const destination = await Destination.findOne({
      offset: random
    });
    
    // Only send clues and ID, not the answer
    const response = {
      id: destination.id,
      clues: destination.clues.slice(0, 2), // Send only 2 random clues
    };
    
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Verify answer
router.post('/verify', async (req, res) => {
  try {
    const { destinationId, answer } = req.body;
    const destination = await Destination.findByPk(destinationId);
    
    const isCorrect = destination.name.toLowerCase() === answer.toLowerCase();
    
    res.json({
      correct: isCorrect,
      funFact: destination.funFacts[Math.floor(Math.random() * destination.funFacts.length)]
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 