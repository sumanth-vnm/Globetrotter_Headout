const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Destination = sequelize.define('Destination', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  clues: {
    type: DataTypes.JSON, // Store array as JSON
    allowNull: false
  },
  funFacts: {
    type: DataTypes.JSON, // Store array as JSON
    allowNull: false
  },
  trivia: {
    type: DataTypes.JSON, // Store array as JSON
    defaultValue: []
  },
  difficulty: {
    type: DataTypes.ENUM('easy', 'medium', 'hard'),
    defaultValue: 'medium'
  }
});

module.exports = Destination; 