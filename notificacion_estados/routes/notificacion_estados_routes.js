var express = require('express');

var Controller = require('../controllers/notificacion_estados_controllers');

var api = express.Router();


api.get('/notificacion_estados', Controller.getAllNotificacion_estados);
api.post('/notificacion_estados',Controller.postNotificacion_estados);
api.put('/notificacion_estados',Controller.putNotificacion_estados);
api.delete('/notificacion_estados',Controller.deleteNotificacion_estados);


module.exports = api;