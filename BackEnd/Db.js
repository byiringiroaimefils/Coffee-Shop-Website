const mongoose = require('mongoose');
require("dotenv").config();

const connectToDb = async () => {
    try {
        mongoose.connection.on('connecting', () => {
            console.log('Attempting to connect to MongoDB...');
        });

        mongoose.connection.on('connected', () => {
            console.log('Successfully connected to MongoDB');
        });

        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
        });
    } catch (error) {
        console.error('Could not connect to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectToDb;
