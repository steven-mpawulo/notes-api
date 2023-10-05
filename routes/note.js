const express = require('express');
const addNote = require('../controllers/notes/addNote');
const getNote = require('../controllers/notes/getNote');

const noteRoute = express.Router();

noteRoute.post('/v1/notes/:userId', addNote);
authRoute.get('/v1/notes/:userId/:noteId', getNote);

module.exports = noteRoute;