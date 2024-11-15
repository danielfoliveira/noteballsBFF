const notesRoutes = require('./notes')
const healthRoutes = require('./health')

// const express = require('express')
// const app = express()

module.exports = (app) => {
  app.use('/_', healthRoutes)
  app.use('/notes', notesRoutes)
}
