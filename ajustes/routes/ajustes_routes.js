var express = require('express');

var Controller = require('../controllers/ajustes_controllers');

var api = express.Router();


api.get('/ajustes', Controller.getAllAjustes);
api.post('/ajustes',Controller.postAjustes);
api.put('/ajustes',Controller.putAjustes);
api.delete('/ajustes',Controller.deleteAjustes);


module.exports = api;