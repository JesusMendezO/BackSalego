var express = require('express');

var Controller = require('../controllers/salidas_controllers');

var api = express.Router();


api.get('/salidas', Controller.getAllSalidas);
api.post('/salidas',Controller.postSalidas);
api.put('/salidas',Controller.putSalidas);
api.delete('/salidas',Controller.deleteSalidas);


module.exports = api;