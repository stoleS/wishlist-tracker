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
  return {
    price: $('.current-price')
      .first()
      .text()
      .trim()
  }
}

module.exports = { gameScrapeBuilder, GameS }
