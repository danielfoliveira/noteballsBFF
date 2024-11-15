const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')

const NotesController = require('../controllers/notes')()

/**
 * @module Notes
 * @description Endpoint that returns a note;
 * <pre>GET /note/:id</pre>
 */
router.get('/:id', asyncHandler(NotesController.getNotes))

module.exports = router

