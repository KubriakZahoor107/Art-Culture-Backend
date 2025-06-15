import { NextFunction, Request, Response } from 'express'

import authService from '../../modules/auth/services/auth.service'
import jwtService from '../../modules/auth/services/jwt.service'
// import loadUserHeaderSchema from '../../modules/auth/schemas/load-user-header.schema'

const loadUser = async (req: Request, res: Response, next: NextFunction) => {
  // const validationResult = loadUserHeaderSchema.safeParse(req.headers)

  // if (validationResult.error) {
  //   next()

  //   return
  // }

  const bearerToken = req.header('Authorization') ?? ''

  const { id } = jwtService.decodeUser(bearerToken)

  const user = await authService.getMe(id)

  if (user) {
    req.user = {
      ...user,
      roles: [user.role],
    }
  }

  next()
}

export default loadUser
