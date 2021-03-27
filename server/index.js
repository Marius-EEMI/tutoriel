const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bonjour !');
});

app.get('/hello', (req, res) => {
    const nom = req.query.nom;
    res.send(!!nom ? `Bonjour, ${nom} !` : "Quel est votre nom ?");
});

app.post('/chat', (req, res) => {
    const msg = req.body.msg;

    switch (msg) {
        case "ville" :
            res.send("Nous sommes à Paris.");
            break;
        case "météo" :
            res.send("Il fait beau.");
            break;
        default:
            res.send("De quoi voulez vous parler ?");
    }
});

module.exports = app
