import ForgotPasswordUseCaseInput from '../types/interfaces/use-case-inputs/forgot-password.use-case-input'
import authService from '../services/auth.service'
import UseCaseOutput from '../../../shared/types/interfaces/use-case-output'

const forgotPasswordUseCase = {
  async execute(input: ForgotPasswordUseCaseInput): Promise<UseCaseOutput<void>> {
    await authService.forgotPassword(input)

    return {
      data: undefined,
      metadata: {
        statusCode: 200,
      },
    }
  },
}

export default forgotPasswordUseCase
