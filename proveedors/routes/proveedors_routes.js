var express = require('express');

var Controller = require('../controllers/proveedors_controllers');

var api = express.Router();


api.get('/proveedors', Controller.getAllProveedors);
api.post('/proveedors',Controller.postProveedors);
api.put('/proveedors',Controller.putProveedors);
api.delete('/proveedors',Controller.deleteProveedors);


module.exports = api;