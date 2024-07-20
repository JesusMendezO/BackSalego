var express = require('express');

var Controller = require('../controllers/nota_creditos_controllers');

var api = express.Router();


api.get('/nota_creditos', Controller.getAllNota_creditos);
api.post('/nota_creditos',Controller.postNota_creditos);
api.put('/nota_creditos',Controller.putNota_creditos);
api.delete('/nota_creditos',Controller.deleteNota_creditos);


module.exports = api;