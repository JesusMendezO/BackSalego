var express = require('express');

var Controller = require('../controllers/factura_electronicas_controllers');

var api = express.Router();


api.get('/factura_electronicas', Controller.getAllFactura_electronicas);
api.post('/factura_electronicas',Controller.postFactura_electronicas);
api.put('/factura_electronicas',Controller.putFactura_electronicas);
api.delete('/factura_electronicas',Controller.deleteFactura_electronicas);


module.exports = api;