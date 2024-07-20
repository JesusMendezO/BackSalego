var express = require('express');

var Controller = require('../controllers/programacion_precios_controllers');

var api = express.Router();


api.get('/programacion_precios', Controller.getAllProgramacion_precios);
api.post('/programacion_precios',Controller.postProgramacion_precios);
api.put('/programacion_precios',Controller.putProgramacion_precios);
api.delete('/programacion_precios',Controller.deleteProgramacion_precios);


module.exports = api;