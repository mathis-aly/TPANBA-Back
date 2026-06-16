

const express = require('express');
const test = require('node:test');

const app = express();

const joueur = require('./base.json');
const { platform } = require('node:os');

app.get('/api/player/random/', (req, res) => {

    const randomIndex = Math.floor(Math.random() * joueur.length)


    const randomPlayer = joueur[randomIndex];

    return res.status(200).json(randomPlayer);



});


app.post('/api/player/check', (req, res) => {
    
    const idJoueur = req.body.playerId;
    const reponseDonnee = req.body.answer; 

   
    const joueurTrouve = joueurs.find((user) => user.id === idJoueur);

   
    if (!joueurTrouve) {
        return res.status(404).json({ error: "Joueur non trouvé" });
    }

   
    if (reponseDonnee === joueurTrouve.team) {
        return res.status(200).json({
            "correct": true,
            "expected": joueurTrouve.team
        });
    } else {
        return res.status(200).json({
            "correct": false,
            "expected": joueurTrouve.team 
        });
    }
});



app.listen(3000, () => {
    console.log("serveur démarré sur localhost:3000");
});