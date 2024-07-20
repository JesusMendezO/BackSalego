var express = require('express');

var Controller = require('../controllers/horarios_controllers');

var api = express.Router();


api.get('/horarios', Controller.getAllHorarios);
api.post('/horarios',Controller.postHorarios);
api.put('/horarios',Controller.putHorarios);
api.delete('/horarios',Controller.deleteHorarios);


module.exports = api;