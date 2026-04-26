// Nexus Social Network - Instagram-like Platform
// Updated: 2026-04-26
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));

// Import routes
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/users');
// const postRoutes = require('./routes/posts');
// const commentRoutes = require('./routes/comments');
// const likeRoutes = require('./routes/likes');
// const followRoutes = require('./routes/follows');
// const messageRoutes = require('./routes/messages');
// const searchRoutes = require('./routes/search');

// API Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/comments', commentRoutes);
// app.use('/api/likes', likeRoutes);
// app.use('/api/follows', followRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/search', searchRoutes);

// Home route
app.get('/', (req, res) => {

  res.sendFile(__dirname + '/public/index.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
