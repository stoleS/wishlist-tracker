const psl = require('psl')

const extractBgImageUrl = css => {
  return css.substring(4, css.length - 1)
}

const extractPrice = price => {
  const sanitized = price.trim().replace(/\D/g, '')
  return sanitized.substring(0, sanitized.length - 2)
}

const extractProvider = url => {
  const hostname = extractHostname(url)
  const parsed = psl.parse(hostname)
  const provider = parsed.sld
  return provider
}

const extractHostname = url => {
  let hostname = ''
  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }

  hostname = hostname.split(':')[0]
  hostname = hostname.split('?')[0]

  console.log(hostname)

  return hostname
}

module.exports = { extractBgImageUrl, extractPrice, extractProvider }
