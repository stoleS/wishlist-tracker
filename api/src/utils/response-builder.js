const createResponse = (error, status, res, body) => {
  if (error) {
    res.status(status).json({ error })
  } else {
    res.status(status).json({ data: body })
  }
}

module.exports = { createResponse }
