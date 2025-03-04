const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

// Users API
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]);
});

// Products API
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Phone', price: 499 }
    ]);
});

// Error Handling Middleware
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Start Server
const PORT = ;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
