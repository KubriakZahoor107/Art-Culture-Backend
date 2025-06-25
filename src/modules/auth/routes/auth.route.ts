import { Router } from 'express'

import validateRequest from '../../../shared/middlewares/validate-request.middleware'
import authController from '../controllers/auth.controller'
import registerUploadMiddleware from '../middlewares/register-upload.middleware'
import wrap from '../../../shared/middlewares/wrap.middleware'
import authValidators from '../validators/auth.validators'

const authRoute = Router()

authRoute.post(
  '/register',
  ...wrap([
    registerUploadMiddleware,
    validateRequest(authValidators.register),
    authController.register,
  ]),
)

authRoute.post(
  '/login',
  ...wrap([
    validateRequest(authValidators.login),
    authController.login,
  ]),
)

authRoute.post(
  '/forgot-password',
  ...wrap([
    validateRequest(authValidators.forgotPassword),
    authController.forgotPassword,
  ]),
)

authRoute.post(
  '/reset-password',
  ...wrap([
    validateRequest(authValidators.resetPassword),
    authController.resetPassword,
  ]),
)

authRoute.get(
  '/me',
  ...wrap([
    validateRequest(authValidators.getCurrentUser),
    authController.getMe,
  ]),
)

authRoute.put(
  '/me',
  ...wrap([
    validateRequest(authValidators.updateUserProfile),
    authController.updateUserProfile,
  ]),
)

export default authRoute
