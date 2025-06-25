import getCurrentUserValidator from './get-current-user.validator'
import loginValidator from './login.validator'
import registerValidator from './register.validator'
import resetPasswordConfirmValidator from './reset-password-confirm.validator'
import forgotPasswordValidator from './forgot-password.validator'
import updateUserProfileValidator from './update-user-profile.validator'

const authValidators = {
  register: registerValidator,
  resetPasswordConfirm: resetPasswordConfirmValidator,
  login: loginValidator,
  getCurrentUser: getCurrentUserValidator,
  // sendRecoveryCode: sendRecoveryCodeValidator,
  // verifyRecoveryCode: verifyRecoveryCodeValidator,
  forgotPassword: forgotPasswordValidator,
  updateUserProfile: updateUserProfileValidator,
}

export default authValidators
