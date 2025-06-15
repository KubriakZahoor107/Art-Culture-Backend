import GetMeUseCaseInput from '../types/interfaces/use-case-inputs/get-me.use-case.input'
import GetMeOutput from '../types/interfaces/service-outputs/get-me.output'
import authService from '../services/auth.service'
import UseCaseOutput from '../../../shared/types/interfaces/use-case-output'

const getMeUseCase = {
  async execute(input: GetMeUseCaseInput)
  : Promise<UseCaseOutput<GetMeOutput>> {
    const result = await authService.getMe(input.userId)

    return {
      data: result,
      metadata: {
        statusCode: 200,
      },
    }
  }
}

export default getMeUseCase
