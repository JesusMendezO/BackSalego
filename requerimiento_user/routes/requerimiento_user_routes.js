var express = require('express');

var Controller = require('../controllers/requerimiento_user_controllers');

var api = express.Router();


api.get('/requerimiento_user', Controller.getAllRequerimiento_user);
api.post('/requerimiento_user',Controller.postRequerimiento_user);
api.put('/requerimiento_user',Controller.putRequerimiento_user);
api.delete('/requerimiento_user',Controller.deleteRequerimiento_user);


module.exports = api;