var express = require('express');

var Controller = require('../controllers/bidons_controllers');

var api = express.Router();


api.get('/bidons', Controller.getAllBidons);
api.post('/bidons',Controller.postBidons);
api.put('/bidons',Controller.putBidons);
api.delete('/bidons',Controller.deleteBidons);


module.exports = api;