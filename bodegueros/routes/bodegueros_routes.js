var express = require('express');

var Controller = require('../controllers/bodegueros_controllers');

var api = express.Router();


api.get('/bodegueros', Controller.getAllBodegueros);
api.post('/bodegueros',Controller.postBodegueros);
api.put('/bodegueros',Controller.putBodegueros);
api.delete('/bodegueros',Controller.deleteBodegueros);


module.exports = api;