const Joi = require('@hapi/joi')

const scrapeSchema = Joi.object({
  url: Joi.string()
    .uri()
    .required()
})

module.exports = { scrapeSchema }
