var express = require('express');

var Controller = require('../controllers/centro_orden_compra_controllers');

var api = express.Router();


api.get('/centro_orden_compra', Controller.getAllCentro_orden_compra);
api.post('/centro_orden_compra',Controller.postCentro_orden_compra);
api.put('/centro_orden_compra',Controller.putCentro_orden_compra);
api.delete('/centro_orden_compra',Controller.deleteCentro_orden_compra);


module.exports = api;