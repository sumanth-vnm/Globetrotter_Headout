require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/users', require('./routes/users'));

// Sync database and start server
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    console.log('Attempting to connect with:', {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      host: process.env.DB_HOST
    });
    
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();