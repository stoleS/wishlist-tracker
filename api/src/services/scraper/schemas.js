const {
  extractBgImageUrl,
  extractPrice
} = require('../../utils/string-helpers')
const { GAMES_BASE_URL } = require('../../utils/constants')

const gameScrapeBuilder = (provider, $) => {
  let data
  switch (provider) {
    case 'games':
      data = GameS($)
      break
    case 'gamecentar':
      data = GameCentar($)
      break
    default:
      data = {}
      break
  }
  return data
}

const GameS = $ => {
  const price = extractPrice(
    $('.current-price')
      .first()
      .text()
  )

  const img = `${GAMES_BASE_URL}${extractBgImageUrl(
    $('.product-image-wrapper > div').css('background-image')
  )}`
  return {
    price,
    img
  }
}

const GameCentar = $ => {
  const price = extractPrice(
    $('.price-info')
      .find('.price')
      .text()
      .replace(/D/g, '')
  )
  const img = $('.product-image-gallery > a')
    .first()
    .attr('href')
  return {
    price,
    img
  }
}

module.exports = { gameScrapeBuilder, GameS, GameCentar }
