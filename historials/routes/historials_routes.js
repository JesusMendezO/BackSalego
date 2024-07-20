var express = require('express');

var Controller = require('../controllers/historials_controllers');

var api = express.Router();


api.get('/historials', Controller.getAllHistorials);
api.post('/historials',Controller.postHistorials);
api.put('/historials',Controller.putHistorials);
api.delete('/historials',Controller.deleteHistorials);


module.exports = api;