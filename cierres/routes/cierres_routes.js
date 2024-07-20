var express = require('express');

var Controller = require('../controllers/cierres_controllers');

var api = express.Router();


api.get('/cierres', Controller.getAllCierres);
api.post('/cierres',Controller.postCierres);
api.put('/cierres',Controller.putCierres);
api.delete('/cierres',Controller.deleteCierres);


module.exports = api;