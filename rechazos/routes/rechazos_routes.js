var express = require('express');

var Controller = require('../controllers/rechazos_controllers');

var api = express.Router();


api.get('/rechazos', Controller.getAllRechazos);
api.post('/rechazos',Controller.postRechazos);
api.put('/rechazos',Controller.putRechazos);
api.delete('/rechazos',Controller.deleteRechazos);


module.exports = api;