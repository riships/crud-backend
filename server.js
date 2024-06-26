const express = require('express');
const app = express();
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./config/db');

// Connect to the database
connectDB();

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
