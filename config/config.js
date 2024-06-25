require('dotenv').config(); // Load environment variables from a .env file into process.env

const config = {
    port: process.env.PORT || 5000, // Application port, default to 5000 if not set
    dbURI: process.env.DB_URI || 'mongodb://localhost:27017/users', // Database URI, default to local MongoDB
    // jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret', // Secret key for JWT authentication
    env: process.env.NODE_ENV || 'development' // Application environment, default to 'development'
};

module.exports = config;
