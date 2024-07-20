var express = require('express');

var Controller = require('../controllers/empresas_controllers');

var api = express.Router();


api.get('/empresas', Controller.getAllEmpresas);
api.post('/empresas',Controller.postEmpresas);
api.put('/empresas',Controller.putEmpresas);
api.delete('/empresas',Controller.deleteEmpresas);


module.exports = api;