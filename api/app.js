require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const {
  notFoundCatcher,
  errorHandler
} = require('./src/utils/middlewares/errors.js')
const app = express()

/* -------------------------------------------------------------------------- */
/*                            Enviroment variables                            */
/* -------------------------------------------------------------------------- */

const port = process.env.PORT
const prefix = process.env.API_PREFIX

/* -------------------------------------------------------------------------- */
/*                               Route handlers                               */
/* -------------------------------------------------------------------------- */

const games = require('./src/routes/games')
const stores = require('./src/routes/stores')
const users = require('./src/routes/users')

/* -------------------------------------------------------------------------- */
/*                                 Middlewares                                */
/* -------------------------------------------------------------------------- */

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.use(`${prefix}/games`, games)
app.use(`${prefix}/stores`, stores)
app.use(`${prefix}/users`, users)

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
