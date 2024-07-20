var express = require('express');

var Controller = require('../controllers/estados_controllers');

var api = express.Router();


api.get('/estados', Controller.getAllEstados);
api.post('/estados',Controller.postEstados);
api.put('/estados',Controller.putEstados);
api.delete('/estados',Controller.deleteEstados);


module.exports = api;