

const express = require('express');
const test = require('node:test');

const app = express();

const joueur = require('./base.json')

app.get('/api/player/random/:id', (req, res) => {

    if (!req.params.id) {
        return res.status(404).json({ message: "Param not found" });
    }

    const result = joueur.find((user) => user.id == req.params.id);

    if (!result) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(result);
});



app.post('/api/player/check', (req, res) => {

    if (!joueur) (
        res.status(404).json("message : joueur non trouvé")
    )

    return res.status(200).json({ test })
});

app.listen(3000, () => {
    console.log("serveur démarré sur localhost:3000");
});