var express = require('express');

var Controller = require('../controllers/entradas_controllers');

var api = express.Router();


api.get('/entradas', Controller.getAllEntradas);
api.post('/entradas',Controller.postEntradas);
api.put('/entradas',Controller.putEntradas);
api.delete('/entradas',Controller.deleteEntradas);


module.exports = api;