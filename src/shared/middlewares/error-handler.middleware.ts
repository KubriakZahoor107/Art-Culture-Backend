import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
	if (res.headersSent) {
		next(err)

    return
	}

	if (err instanceof z.ZodError) {
		res
      .status(400)
      .json({
        message: err.message,
      })

    return
	}

	res.status(500).json({
		error: err.message || 'Internal Server Error',
	})
}

export default errorHandler
