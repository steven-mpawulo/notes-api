const express = require('express');

const friendRoute = express.Router();
const addFriend = require('../controllers/friends/addFriend');
const removeFriend = require('../controllers/friends/removeFriend');

friendRoute.post('/v1/friends/:friendId/:userId', addFriend);

friendRoute.delete('/v1/friends/:friendId/:userId', removeFriend);

module.exports = friendRoute;
