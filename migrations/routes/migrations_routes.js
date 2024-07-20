var express = require('express');

var Controller = require('../controllers/migrations_controllers');

var api = express.Router();


api.get('/migrations', Controller.getAllMigrations);
api.post('/migrations',Controller.postMigrations);
api.put('/migrations',Controller.putMigrations);
api.delete('/migrations',Controller.deleteMigrations);


module.exports = api;