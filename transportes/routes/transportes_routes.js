var express = require('express');

var Controller = require('../controllers/transportes_controllers');

var api = express.Router();


api.get('/transportes', Controller.getAllTransportes);
api.post('/transportes',Controller.postTransportes);
api.put('/transportes',Controller.putTransportes);
api.delete('/transportes',Controller.deleteTransportes);


module.exports = api;