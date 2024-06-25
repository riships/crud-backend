const express = require('express');
const app = express();
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./config/db');

// Connect to the database
connectDB();

// Middleware
// app.use(express.json());

// Routes
// app.use('/api/users', userRoutes);

// Error handling middleware
// app.use(require('./middlewares/errorMiddleware'));

// Start the server
const PORT = config.port || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
