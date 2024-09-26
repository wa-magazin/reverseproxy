const express = require('express');
const app = express();
const PORT = 4000;

// Простое API
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Новый маршрут для корневого пути
app.get('/', (req, res) => {
    res.send('Welcome to the Backend!');
});

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
