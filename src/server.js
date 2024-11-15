const express = require('express')



const app = express()
const port = 3500

app.listen(port)

require('./routes')(app)

module.exports = app