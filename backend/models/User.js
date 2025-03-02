const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  scoreCorrect: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  scoreIncorrect: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  gamesPlayed: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = User; 