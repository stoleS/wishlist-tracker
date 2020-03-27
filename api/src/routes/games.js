const express = require('express')
const asyncMiddleware = require('../utils/middlewares/async')
const router = express.Router()

/* -------------------------- Controller functions -------------------------- */

const { getGameData } = require('../controllers/games')

/* ------------------ Scrape game data from provider by url ----------------- */

router.post('/fetch', asyncMiddleware(getGameData))

module.exports = router
