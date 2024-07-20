var express = require('express');

var Controller = require('../controllers/centros_controllers');

var api = express.Router();


api.get('/centros', Controller.getAllCentros);
api.post('/centros',Controller.postCentros);
api.put('/centros',Controller.putCentros);
api.delete('/centros',Controller.deleteCentros);


module.exports = api;