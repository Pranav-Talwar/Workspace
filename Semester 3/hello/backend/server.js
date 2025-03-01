const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes'); // Import routes

// Define MongoDB URI and Port directly in the code
const MONGO_URI = 'mongodb://127.0.0.1:27017/studentDB'; // Use 127.0.0.1 instead of 'localhost'
const PORT = 5000; // Define port manually

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => {
        console.error('❌ MongoDB connection failed:', err);
        process.exit(1); // Exit if the connection fails
    });

// Use routes
app.use('/api', studentRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
