const express = require('express')
const asyncMiddleware = require('../utils/middlewares/async')
const { validateBody } = require('../utils/middlewares/validation')
const router = express.Router()

/* -------------------------------------------------------------------------- */
/*                            Controller functions                            */
/* -------------------------------------------------------------------------- */

const { scrapeGameData } = require('../controllers/games')

/* -------------------------------------------------------------------------- */
/*                             Validation schemas                             */
/* -------------------------------------------------------------------------- */

const { scrapeSchema } = require('../utils/schemas/games.js')

/* ------------------ Scrape game data from provider by url ----------------- */

router.post(
  '/scrape',
  validateBody(scrapeSchema),
  asyncMiddleware(scrapeGameData)
)

module.exports = router
