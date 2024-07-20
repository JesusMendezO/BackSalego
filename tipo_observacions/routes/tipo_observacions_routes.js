var express = require('express');

var Controller = require('../controllers/tipo_observacions_controllers');

var api = express.Router();


api.get('/tipo_observacions', Controller.getAllTipo_observacions);
api.post('/tipo_observacions',Controller.postTipo_observacions);
api.put('/tipo_observacions',Controller.putTipo_observacions);
api.delete('/tipo_observacions',Controller.deleteTipo_observacions);


module.exports = api;