var express = require('express');

var Controller = require('../controllers/orden_compras_controllers');

var api = express.Router();


api.get('/orden_compras', Controller.getAllOrden_compras);
api.post('/orden_compras',Controller.postOrden_compras);
api.put('/orden_compras',Controller.putOrden_compras);
api.delete('/orden_compras',Controller.deleteOrden_compras);


module.exports = api;