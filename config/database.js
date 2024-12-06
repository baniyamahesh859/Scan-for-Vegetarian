const mongoose = require('mongoose');
require('dotenv').config();

const dbConfig = {
    url: process.env.MONGODB_URI,
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.url);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB error:', err);
});

module.exports = {
    connectDB,
    dbConfig
};