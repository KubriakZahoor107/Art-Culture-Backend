import getCurrentUserValidator from './get-current-user.validator'
import loginValidator from './login.validator'
import registerValidator from './register.validator'
import resetPasswordValidator from './reset-password.validator'
import forgotPasswordValidator from './forgot-password.validator'
import updateUserProfileValidator from './update-user-profile.validator'

const authValidators = {
  register: registerValidator,
  resetPassword: resetPasswordValidator,
  login: loginValidator,
  getCurrentUser: getCurrentUserValidator,
  // sendRecoveryCode: sendRecoveryCodeValidator,
  // verifyRecoveryCode: verifyRecoveryCodeValidator,
  forgotPassword: forgotPasswordValidator,
  updateUserProfile: updateUserProfileValidator,
}

export default authValidators
