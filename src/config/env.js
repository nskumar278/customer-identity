// For development purposes, load env variables from a .env file
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// For production, use the environment variables set in the hosting platform
module.exports = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development',
}
