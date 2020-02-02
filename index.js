require('dotenv').config();
const express = require('express');
const { Troupe, Artiste } = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// TROUPE REQUEST
app.get('/api/v1/prestations', async (req, res) => {
    const troupe = await Troupe.findAll()
    res.send(troupe);
})

app.get('/api/v1/prestations/:id', async (req, res) => {
    const { id } = req.params;
    const troupe = await Troupe.findAll({where: {id}});  
    res.send(troupe);
})

app.get('/api/v1/prestations/artistes/:TroupeId', async (req, res) => {
    const { TroupeId } = req.params;
    const artiste = await Artiste.findAll({where: {TroupeId}});
    res.send(artiste)
})

app.post('/api/v1/prestations', async (req, res) => {
    const { ville, description, tarif_Enfant, tarif_Adulte, note } = req.body;
    const troupe = await Troupe.create({ ville, description, tarif_Enfant, tarif_Adulte, note })
    res.send(troupe);
} )

app.put('api/v1/prestation/:id', (req, res) => {
    const { id } = req.params
    const { ville } = req.body
    res.send({id, ville })
})

// ARTISTES REQUEST

app.get('/api/v1/artistes', async (req, res) => {
    const artiste = await Artiste.findAll();
    res.send(artiste)
})

app.get('/api/v1/artistes/:id', async (req, res) => {
    const { id } = req.params;
    const artiste = await Artiste.findAll({where: {id}});
    res.send(artiste)
})

app.post('/api/v1/artistes', async (req, res) => {
    const { nom, prenom, surnom, age, role, TroupeId } = req.body;
    const artiste = await Artiste.create({ nom, prenom, surnom, age, role, TroupeId });
    res.send(artiste)
})

app.listen(3001,  () => {
    console.log('Le serveur écoute sur le port 3001 ! Donc ca roule,.. pour l instant')
});