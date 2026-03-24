const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint (real backend simulation)
app.get('/api/balance', (req, res) => {
    const balance = (Math.random() * 10000).toFixed(2);
    res.json({
        status: "success",
        balance: balance
    });
});

// Health check endpoint (VERY IMPORTANT for DevOps)
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "UP",
        service: "fintech-app"
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Fintech app running on port ${PORT}`);
});