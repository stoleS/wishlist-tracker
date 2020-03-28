const { createResponse } = require('../response-builder')

const validateBody = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) createResponse(error, res, 400)
    else next()
  }
}

module.exports = { validateBody }
