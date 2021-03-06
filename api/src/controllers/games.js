const { createResponse } = require('../utils/response-builder')

/* -------------------------------------------------------------------------- */
/*                              Service functions                             */
/* -------------------------------------------------------------------------- */

const { getGameData } = require('../services/games/scrape')

/* --------------------- Scrape game data from provider --------------------- */

const scrapeGameData = async (req, res, next) => {
  const { url } = req.body
  const gameData = await getGameData(url)
  createResponse(null, res, 200, gameData)
}

const scrapeAllGamesData = async (req, res, next) => {
  createResponse(null, res, 200, {})
}

module.exports = { scrapeGameData, scrapeAllGamesData }
