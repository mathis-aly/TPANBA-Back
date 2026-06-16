const express = require('express');

const app = express();

app.get('/api/player/random', (req,res) => {
    res.send("hello world");
});
app.post('/api/player/check', (req,res) => {
    res.send("hello world");
});

app.listen(3000, () => {
    console.log("serveur démarré sur localhost:3000");
});