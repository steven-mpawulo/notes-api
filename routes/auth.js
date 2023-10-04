const express = require('express');
const signup = require('../controllers/auth/signup');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');

const passportAuthentication = require('../passport/passport');
passportAuthentication(passport, LocalStrategy, bcrypt, User);

const authRoute = express.Router();

authRoute.post('/v1/auth/signup', signup);
authRoute.post('/v1/auth/login', passport.authenticate('local'), login);
authRoute.post('/v1/auth/logout', logout);

module.exports = authRoute;