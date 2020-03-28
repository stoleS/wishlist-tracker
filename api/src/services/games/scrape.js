const fetch = require('node-fetch')
const { scrape } = require('../scraper/scrape')

const getGameData = async url => {
  try {
    const rawData = await fetch(url)
    const html = await rawData.text()

    const data = scrape('GameS', html)

    return data
  } catch (error) {}
}

module.exports = { getGameData }
