const express = require('express');
const addNote = require('../controllers/notes/addNote');
const getNote = require('../controllers/notes/getNote');
const deleteNote = require('../controllers/notes/deleteNote');
const getNotes = require('../controllers/notes/getNotes');
const updateNote = require('../controllers/notes/updateNote');

const noteRoute = express.Router();

noteRoute.post('/v1/notes/:userId', addNote);
noteRoute.get('/v1/notes/:userId', getNotes);
noteRoute.get('/v1/notes/:userId/:noteId', getNote);
noteRoute.put('/v1/notes/:userId/:noteId', updateNote);
noteRoute.delete('/v1/notes/:userId/:noteId', deleteNote);

module.exports = noteRoute;