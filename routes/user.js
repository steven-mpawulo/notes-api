const express = require('express');
const getUsers = require('../controllers/user/getUsers');

const userRoute = express.Router();

userRoute.get('/v1/users', getUsers);

module.exports = userRoute;