var express = require('express');

var Controller = require('../controllers/nota_credito_tributarias_controllers');

var api = express.Router();


api.get('/nota_credito_tributarias', Controller.getAllNota_credito_tributarias);
api.post('/nota_credito_tributarias',Controller.postNota_credito_tributarias);
api.put('/nota_credito_tributarias',Controller.putNota_credito_tributarias);
api.delete('/nota_credito_tributarias',Controller.deleteNota_credito_tributarias);


module.exports = api;