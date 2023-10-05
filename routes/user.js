const express = require('express');
const getUsers = require('../controllers/user/getUsers');
const getUser = require('../controllers/user/getUser');
const deleteUser = require('../controllers/user/deleteUser');

const userRoute = express.Router();

userRoute.get('/v1/users', getUsers);
userRoute.get('/v1/users/:userId', getUser);
userRoute.delete('/v1/users/:userId', deleteUser);

module.exports = userRoute;