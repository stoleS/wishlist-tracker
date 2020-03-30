const Joi = require('@hapi/joi')

const scrapeSingleGameSchema = Joi.object({
  url: Joi.string()
    .uri()
    .required()
})

const scrapeAllGamesSchema = Joi.object({
  urls: Joi.array()
    .items(Joi.string().uri())
    .required()
})

module.exports = { scrapeSingleGameSchema, scrapeAllGamesSchema }
