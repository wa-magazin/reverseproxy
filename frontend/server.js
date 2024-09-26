const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Обслуживаем статический контент
app.use(express.static(path.join(__dirname)));

// Отправляем index.html для всех запросов
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend server is running on port ${PORT}`);
});
