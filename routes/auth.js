const express = require('express');
const signup = require('../controllers/auth/signup');

const authRoute = express.Router();

authRoute.post('/v1/signup', signup);

module.exports = authRoute;