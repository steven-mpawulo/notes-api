const express = require('express');
const signup = require('../controllers/auth/signup');
const passport = require('passport');
const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');

const passportAuthentication = require('../passport/passport');
passportAuthentication();

const authRoute = express.Router();

authRoute.post('/v1/auth/signup', signup);
authRoute.post('/v1/auth/login', passport.authenticate('local'), login);
authRoute.post('/v1/auth/logout', logout);

module.exports = authRoute;