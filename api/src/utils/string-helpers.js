const extractBgImageUrl = css => {
  return css.substring(4, css.length - 1)
}

module.exports = { extractBgImageUrl }
