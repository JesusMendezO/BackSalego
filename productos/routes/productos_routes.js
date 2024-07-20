var express = require('express');

var Controller = require('../controllers/productos_controllers');

var api = express.Router();


api.get('/productos', Controller.getAllProductos);
api.post('/productos',Controller.postProductos);
api.put('/productos',Controller.putProductos);
api.delete('/productos',Controller.deleteProductos);


module.exports = api;