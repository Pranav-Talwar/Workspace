import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes';

// Load environment variables
dotenv.config();

// Get variables from .env
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/studentDB';
const PORT = process.env.PORT || 5000;

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // No need for body-parser in modern Express

// MongoDB Connection  
mongoose
    .connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => {
        console.error('❌ MongoDB connection failed:', err);
        process.exit(1);
    });

// Use routes
app.use('/api', studentRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
