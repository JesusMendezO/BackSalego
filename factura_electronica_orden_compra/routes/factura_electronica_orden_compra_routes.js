var express = require('express');

var Controller = require('../controllers/factura_electronica_orden_compra_controllers');

var api = express.Router();


api.get('/factura_electronica_orden_compra', Controller.getAllFactura_electronica_orden_compra);
api.post('/factura_electronica_orden_compra',Controller.postFactura_electronica_orden_compra);
api.put('/factura_electronica_orden_compra',Controller.putFactura_electronica_orden_compra);
api.delete('/factura_electronica_orden_compra',Controller.deleteFactura_electronica_orden_compra);


module.exports = api;