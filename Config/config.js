const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
    port: process.env.PORT || 3000,
    dbUri: process.env.MONGODB_URL
};
