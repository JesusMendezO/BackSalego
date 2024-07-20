var express = require('express');

var Controller = require('../controllers/folios_controllers');

var api = express.Router();


api.get('/folios', Controller.getAllFolios);
api.post('/folios',Controller.postFolios);
api.put('/folios',Controller.putFolios);
api.delete('/folios',Controller.deleteFolios);


module.exports = api;