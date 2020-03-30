const fetch = require('node-fetch')
const { scrape } = require('../scraper/scrape')
const { extractProvider } = require('../../utils/string-helpers')

const getGameData = async url => {
  try {
    const rawData = await fetch(url)
    const html = await rawData.text()
    const provider = extractProvider(url)

    const data = scrape(html, provider)

    return data
  } catch (error) {}
}

module.exports = { getGameData }
