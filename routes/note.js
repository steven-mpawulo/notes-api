const express = require('express');
const addNote = require('../controllers/notes/addNote');
const getNote = require('../controllers/notes/getNote');
const deleteNote = require('../controllers/notes/deleteNote');

const noteRoute = express.Router();

noteRoute.post('/v1/notes/:userId', addNote);
authRoute.get('/v1/notes/:userId/:noteId', getNote);
authRoute.delete('/v1/notes/:userId/:noteId', deleteNote);

module.exports = noteRoute;