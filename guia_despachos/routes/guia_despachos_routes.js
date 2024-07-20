var express = require('express');

var Controller = require('../controllers/guia_despachos_controllers');

var api = express.Router();


api.get('/guia_despachos', Controller.getAllGuia_despachos);
api.post('/guia_despachos',Controller.postGuia_despachos);
api.put('/guia_despachos',Controller.putGuia_despachos);
api.delete('/guia_despachos',Controller.deleteGuia_despachos);


module.exports = api;