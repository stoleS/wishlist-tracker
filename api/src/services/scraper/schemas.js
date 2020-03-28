const { extractBgImageUrl } = require('../../utils/string-helpers')
const { GAMES_BASE_URL } = require('../../utils/constants')

const gameScrapeBuilder = (provider, $) => {
  let data
  switch (provider) {
    case 'GameS':
      data = GameS($)
      break

    default:
      break
  }
  return data
}

const GameS = $ => {
  const price = $('.current-price')
    .first()
    .text()
    .trim()
  const img = `${GAMES_BASE_URL}${extractBgImageUrl(
    $('.product-image-wrapper > div').css('background-image')
  )}`
  return {
    price,
    img
  }
}

module.exports = { gameScrapeBuilder, GameS }
