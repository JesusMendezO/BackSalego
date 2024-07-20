var express = require('express');

var Controller = require('../controllers/failed_jobs_controllers');

var api = express.Router();


api.get('/failed_jobs', Controller.getAllFailed_jobs);
api.post('/failed_jobs',Controller.postFailed_jobs);
api.put('/failed_jobs',Controller.putFailed_jobs);
api.delete('/failed_jobs',Controller.deleteFailed_jobs);


module.exports = api;