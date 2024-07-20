var express = require('express');

var Controller = require('../controllers/presupuestos_controllers');

var api = express.Router();


api.get('/presupuestos', Controller.getAllPresupuestos);
api.post('/presupuestos',Controller.postPresupuestos);
api.put('/presupuestos',Controller.putPresupuestos);
api.delete('/presupuestos',Controller.deletePresupuestos);


module.exports = api;