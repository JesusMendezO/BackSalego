var express = require('express');

var Controller = require('../controllers/compass_roles_controllers');

var api = express.Router();


api.get('/compass_roles', Controller.getAllCompass_roles);
api.post('/compass_roles',Controller.postCompass_roles);
api.put('/compass_roles',Controller.putCompass_roles);
api.delete('/compass_roles',Controller.deleteCompass_roles);


module.exports = api;