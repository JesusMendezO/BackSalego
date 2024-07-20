var express = require('express');

var Controller = require('../controllers/carga_inicials_controllers');

var api = express.Router();


api.get('/carga_inicials', Controller.getAllCarga_inicials);
api.post('/carga_inicials',Controller.postCarga_inicials);
api.put('/carga_inicials',Controller.putCarga_inicials);
api.delete('/carga_inicials',Controller.deleteCarga_inicials);


module.exports = api;