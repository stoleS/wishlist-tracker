const express = require('express')
const asyncMiddleware = require('../utils/middlewares/async')
const { validateBody } = require('../utils/middlewares/validation')
const router = express.Router()

/* -------------------------------------------------------------------------- */
/*                            Controller functions                            */
/* -------------------------------------------------------------------------- */

const { scrapeGameData, scrapeAllGamesData } = require('../controllers/games')

/* -------------------------------------------------------------------------- */
/*                             Validation schemas                             */
/* -------------------------------------------------------------------------- */

const {
  scrapeSingleGameSchema,
  scrapeAllGamesSchema
} = require('../utils/schemas/games.js')

/* ------------------ Scrape game data from provider by url ----------------- */

router.post(
  '/scrape-single',
  validateBody(scrapeSingleGameSchema),
  asyncMiddleware(scrapeGameData)
)

router.post(
  '/scrape-all',
  validateBody(scrapeAllGamesSchema),
  asyncMiddleware(scrapeAllGamesData)
)

module.exports = router
