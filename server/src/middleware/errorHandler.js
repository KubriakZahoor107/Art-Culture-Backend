const errorHandler = (err, req, res, next) => {
  console.error(err.stack)

  if (res.headersSent) {
    return next(err)
  }

  const statusCode = err.name === 'ValidationError' ? 400 : err.status || 500
  const message = err.message ||
    (statusCode === 400 ? 'Validation error' : 'Internal Server Error')

  res.status(statusCode).json({ error: message })
}

export default errorHandler
