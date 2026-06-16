

const express = require('express');
const test = require('node:test');

const app = express();

const joueur = require('./base.json')

app.get('/api/player/random/', (req, res) => {

    const randomIndex = Math.floor(Math.random()* joueur.length) // ici ça génére un nombre aléatoire entre 0 et 1 et prend tout les joueurs grâce à joueur.length
 
    
    const randomPlayer = joueur[randomIndex]; // récupère le joueur 

    return res.status(200).json(randomPlayer); // envoie la réponse 


});
app.get('/api/player/quiz', (req, res) => {

    const { id, question, value } = req.query;

    const player = joueurs.find(p => p.id == id);

    if (!player) {
        return res.status(404).json({ message: "Joueur introuvable" });
    }

    let result;

    switch (question) {

        case "team":
            result = player.team === value;
            break;
                
            case "conference":
            result = player.conference === value;
            break;

                 case "position":
                    result = player.position === value;
                     break;

                        case "country":
                        result = player.country === value;
                         break;

                         case "number":
                            result = player.number == value;
                            break;

                                case "height_cm":
                                    result = player.height_cm == Number(value);
                                    break;

                                    case "weight_kg":
                                    result = player.weight_kg == Number(value);
                                    break;

                                         case "age":
                                        result = player.age == Number(value);
                                         break;

                                         default:
                                            return res.status(400).json({ message: "question invalide" });
    }

    return res.status(200).json({
        player: player.name,
        question,
        value,
        result
    });
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

