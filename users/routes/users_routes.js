var express = require('express');

var Controller = require('../controllers/users_controllers');

var api = express.Router();


api.get('/users', Controller.getAllUsers);
api.post('/users',Controller.postUsers);
api.put('/users',Controller.putUsers);
api.delete('/users',Controller.deleteUsers);


module.exports = api;