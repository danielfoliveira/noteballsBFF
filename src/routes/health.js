const express = require('express')
const router = express.Router()

/**
 * @module HEALTH
 * @description Endpoint check if the server running and returns a 200
 * <pre>GET /_/health</pre>
 * <pre>Return:
 {} 200 OK</pre>
 */
router.get('/health', (req, res) => {
  if (process.env.COMMIT_SHA) {
    return res.status(200).send(process.env.COMMIT_SHA)
  }
  res.sendStatus(200)
})

module.exports = router

