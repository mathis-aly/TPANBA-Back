

const express = require('express');
const test = require('node:test');

const app = express();

const joueur = ({

    "nom": "test"
})

app.get('/api/player/random', (req,res) => {
    return res.send("hello world");
});


app.post('/api/player/check', (req,res) => {

    if (!joueur)(
        res.status(404).json("message : joueur non trouvé")
    )
    
    return res.status(200).json({test})
});

app.listen(3000, () => {
    console.log("serveur démarré sur localhost:3000");
});