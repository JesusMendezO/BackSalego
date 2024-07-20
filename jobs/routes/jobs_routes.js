var express = require('express');

var Controller = require('../controllers/jobs_controllers');

var api = express.Router();


api.get('/jobs', Controller.getAllJobs);
api.post('/jobs',Controller.postJobs);
api.put('/jobs',Controller.putJobs);
api.delete('/jobs',Controller.deleteJobs);


module.exports = api;