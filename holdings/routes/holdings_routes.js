var express = require('express');

var Controller = require('../controllers/holdings_controllers');

var api = express.Router();


api.get('/holdings', Controller.getAllHoldings);
api.post('/holdings',Controller.postHoldings);
api.put('/holdings',Controller.putHoldings);
api.delete('/holdings',Controller.deleteHoldings);


module.exports = api;