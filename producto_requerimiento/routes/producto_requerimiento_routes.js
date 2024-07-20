var express = require('express');

var Controller = require('../controllers/producto_requerimiento_controllers');

var api = express.Router();


api.get('/producto_requerimiento', Controller.getAllProducto_requerimiento);
api.post('/producto_requerimiento',Controller.postProducto_requerimiento);
api.put('/producto_requerimiento',Controller.putProducto_requerimiento);
api.delete('/producto_requerimiento',Controller.deleteProducto_requerimiento);


module.exports = api;