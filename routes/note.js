const express = require('express');
const addNote = require('../controllers/notes/addNote');

const noteRoute = express.Router();

noteRoute.post('/v1/notes/:userId', addNote);

module.exports = noteRoute;