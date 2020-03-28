const fetch = require('node-fetch')
const $ = require('cheerio')
const { createResponse } = require('../utils/response-builder')

const scrapeGameData = async (req, res, next) => {
  const { url } = req.body
  const gameData = { url }
  createResponse(null, res, 200, gameData)
}

module.exports = { scrapeGameData }
