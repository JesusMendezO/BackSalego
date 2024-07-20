var express = require('express');

var Controller = require('../controllers/notifications_controllers');

var api = express.Router();


api.get('/notifications', Controller.getAllNotifications);
api.post('/notifications',Controller.postNotifications);
api.put('/notifications',Controller.putNotifications);
api.delete('/notifications',Controller.deleteNotifications);


module.exports = api;