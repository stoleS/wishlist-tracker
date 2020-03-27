require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {
  notFoundCatcher,
  errorHandler
} = require('./src/utils/middlewares/error-handlers.js')
const app = express()
const port = process.env.PORT

/* -------------------------------------------------------------------------- */
/*                               Route handlers                               */
/* -------------------------------------------------------------------------- */

const games = require('./src/routes/games')
const stores = require('./src/routes/stores')

/* -------------------------------------------------------------------------- */
/*                                 Middlewares                                */
/* -------------------------------------------------------------------------- */

app.use(morgan('dev'))
app.use(bodyParser.json())

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.use('/api/v1/games', games)
app.use('/api/v1/stores', stores)

/* -------------------------------------------------------------------------- */
/*                               Error handlers                               */
/* -------------------------------------------------------------------------- */

/* ------------------------------- 404 catcher ------------------------------ */

app.use(notFoundCatcher)

/* -------------------------- Global error handler -------------------------- */

app.use(errorHandler)

/* -------------------------------------------------------------------------- */
/*                                Server setup                                */
/* -------------------------------------------------------------------------- */

app.listen(port, () => console.log(`Server is listening on port ${port}`))
