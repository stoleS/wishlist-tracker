const notFoundCatcher = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}

const errorHandler = (err, req, res, next) => {
  const error = process.env.STAGE === 'dev' ? err : {}
  const status = err.status || 500

  res.status(status).json({
    error: {
      message: error.message
    }
  })

  console.error(err)
}

module.exports = { notFoundCatcher, errorHandler }
