var express = require('express');

var Controller = require('../controllers/password_resets_controllers');

var api = express.Router();


api.get('/password_resets', Controller.getAllPassword_resets);
api.post('/password_resets',Controller.postPassword_resets);
api.put('/password_resets',Controller.putPassword_resets);
api.delete('/password_resets',Controller.deletePassword_resets);


module.exports = api;