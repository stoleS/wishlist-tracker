const { createResponse } = require('../../utils/response-builder.js')

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(error => {
    console.log('!!!!!', error)
    createResponse(error, res, 400)
  })
}

module.exports = asyncMiddleware
