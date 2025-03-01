"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
// Load environment variables
dotenv_1.default.config();
// Get variables from .env
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/studentDB';
const PORT = process.env.PORT || 5000;
// Initialize the Express app
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)()); 
app.use(express_1.default.json()); // No need for body-parser in modern Express
// MongoDB Connection
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => {
    console.error('❌ MongoDB connection failed:', err);
    process.exit(1);
});
// Use routes
app.use('/api', studentRoutes_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
