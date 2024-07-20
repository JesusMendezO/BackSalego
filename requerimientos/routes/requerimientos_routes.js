var express = require('express');

var Controller = require('../controllers/requerimientos_controllers');

var api = express.Router();


api.get('/requerimientos', Controller.getAllRequerimientos);
api.post('/requerimientos',Controller.postRequerimientos);
api.put('/requerimientos',Controller.putRequerimientos);
api.delete('/requerimientos',Controller.deleteRequerimientos);


module.exports = api;