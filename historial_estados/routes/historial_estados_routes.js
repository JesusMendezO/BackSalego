var express = require('express');

var Controller = require('../controllers/historial_estados_controllers');

var api = express.Router();


api.get('/historial_estados', Controller.getAllHistorial_estados);
api.post('/historial_estados',Controller.postHistorial_estados);
api.put('/historial_estados',Controller.putHistorial_estados);
api.delete('/historial_estados',Controller.deleteHistorial_estados);


module.exports = api;