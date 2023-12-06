const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Import your routes
const authRoutes = require('./src/routes/auth.routes'); // Authentication routes
const postRoutes = require('./src/routes/post.routes'); // Post-related routes

// Middleware setup
app.use(bodyParser.json());
app.use(cookieParser());

// Use your authentication routes
app.use('/api/auth', authRoutes);

// Use your post-related routes
app.use('/api/posts', postRoutes);

// Import your database connection
const connection = require('./src/config/db.config'); // Update the path accordingly

async function startServer() {
  try {
    // Sync Sequelize models with the database
    await connection.sync();

    // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error synchronizing models with the database:', error);
  }
}

startServer();
