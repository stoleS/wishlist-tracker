const {
  extractBgImageUrl,
  extractPrice
} = require('../../utils/string-helpers')
const { GAMES_BASE_URL } = require('../../utils/constants')

/* -------------------------------------------------------------------------- */
/*       Depending on provider/store from url choose right scrape schema      */
/* -------------------------------------------------------------------------- */

const gameScrapeBuilder = (provider, $) => {
  let data
  switch (provider) {
    case 'games':
      data = GameS($)
      break
    case 'gamecentar':
      data = GameCentar($)
      break
    case 'computerlandshop':
      data = ComputerLandShop($)
      break
    default:
      data = {}
      break
  }
  return data
}

/* ---------------------- Extract data from GameS store --------------------- */

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

/* ------------------- Extract data from GameCentar store ------------------- */

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

/* ---------------- Extract data from ComputerLandShop store ---------------- */

const ComputerLandShop = $ => {
  const price = extractPrice($('#buy-price > h1').text(), { slice: false })
  const img = $('.main_image > img').attr('src')
  return { price, img: img.replace('details/', '') }
}

module.exports = { gameScrapeBuilder, GameS, GameCentar }
