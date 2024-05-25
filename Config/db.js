const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
    try {
        await mongoose.connect(
            config.dbUri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("Connected to %s", config.dbUri);
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

module.exports = connectDB;