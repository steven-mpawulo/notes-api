const express = require('express');
const signup = require('../controllers/auth/signup');
const passport = require('passport');
const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');
const passportAuthentication = require('../passport/passport');
const resetPassword = require('../controllers/auth/resetPassword');
const updatePassword = require('../controllers/auth/updatePassword');

passportAuthentication();

const authRoute = express.Router();

authRoute.post('/v1/auth/signup', signup);
authRoute.post('/v1/auth/login', passport.authenticate('local'), login);
authRoute.post('/v1/auth/logout', logout);
authRoute.post('/v1/auth/password/reset', resetPassword);
authRoute.post('/v1/auth/password/update', updatePassword);

module.exports = authRoute;