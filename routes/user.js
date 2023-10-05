const express = require('express');
const getUsers = require('../controllers/user/getUsers');
const getUser = require('../controllers/user/getUser');

const userRoute = express.Router();

userRoute.get('/v1/users', getUsers);
userRoute.get('/v1/users/:userId', getUser);

module.exports = userRoute;