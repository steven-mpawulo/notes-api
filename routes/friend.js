const express = require('express');

const friendRoute = express.Router();
const addFriend = require('../controllers/friends/addFriend');
const removeFriend = require('../controllers/friends/removeFriend');
const getFriends = require('../controllers/friends/getFriends');
const getFriend = require('../controllers/friends/getFriend');

friendRoute.post('/v1/friends/:friendId/:userId', addFriend);
friendRoute.get('/v1/friends/:userId', getFriends);
friendRoute.get('/v1/friends/:userId/:friendId', getFriend);

friendRoute.delete('/v1/friends/:friendId/:userId', removeFriend);

module.exports = friendRoute;
