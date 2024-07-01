// server.js or app.js

const express = require('express');
const {connectDB} = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors()); 

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
