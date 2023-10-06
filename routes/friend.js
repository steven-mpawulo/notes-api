const express = require('express');

const friendRoute = express.Router();
const addFriend = require('../controllers/friends/addFriend');

friendRoute.post('/v1/friends/:friendId/:userId', addFriend);

module.exports = friendRoute;
