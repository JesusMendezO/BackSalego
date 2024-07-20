var express = require('express');

var Controller = require('../controllers/abastecimientos_controllers');

var api = express.Router();


api.get('/abastecimientos', Controller.getAllAbastecimientos);
api.post('/abastecimientos',Controller.postAbastecimientos);
api.put('/abastecimientos',Controller.putAbastecimientos);
api.delete('/abastecimientos',Controller.deleteAbastecimientos);


module.exports = api;