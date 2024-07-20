var express = require('express');

var Controller = require('../controllers/centro_nota_credito_tributaria_controllers');

var api = express.Router();


api.get('/centro_nota_credito_tributaria', Controller.getAllCentro_nota_credito_tributaria);
api.post('/centro_nota_credito_tributaria',Controller.postCentro_nota_credito_tributaria);
api.put('/centro_nota_credito_tributaria',Controller.putCentro_nota_credito_tributaria);
api.delete('/centro_nota_credito_tributaria',Controller.deleteCentro_nota_credito_tributaria);


module.exports = api;