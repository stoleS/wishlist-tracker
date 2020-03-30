const cheerio = require('cheerio')
const { gameScrapeBuilder } = require('./schemas')

const scrape = async (html, provider) => {
  try {
    const $ = cheerio.load(html)
    const data = gameScrapeBuilder(provider, $)
    return data
  } catch (error) {}
}

module.exports = { scrape }
