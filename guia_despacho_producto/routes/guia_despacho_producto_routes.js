var express = require('express');

var Controller = require('../controllers/guia_despacho_producto_controllers');

var api = express.Router();


api.get('/guia_despacho_producto', Controller.getAllGuia_despacho_producto);
api.post('/guia_despacho_producto',Controller.postGuia_despacho_producto);
api.put('/guia_despacho_producto',Controller.putGuia_despacho_producto);
api.delete('/guia_despacho_producto',Controller.deleteGuia_despacho_producto);


module.exports = api;