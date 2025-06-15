import jwt, { JsonWebTokenError } from 'jsonwebtoken'

import AppUserModel from '../../../shared/types/interfaces/models/app-user.model'

const jwtService = {
  encodeUser(user: AppUserModel) {
    const token = jwt.sign(
      user,
      process.env.JWT_SECRET,
    )

    return token
  },

  decodeUser(token: string): AppUserModel {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      return decoded as AppUserModel
    }
    
    catch (error) {
      switch (true) {
        case error instanceof JsonWebTokenError:
          throw new Error('invalid token')
          // throw new InvalidJwtTokenException()

        default:
          throw new Error('internal server error')
          // throw new InternalServerErrorException()
      }
    }
  }
}

export default jwtService
