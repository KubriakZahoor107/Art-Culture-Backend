import UseCaseOutput from '../../../../../shared/types/interfaces/use-case-output'

interface RegisterUseCaseOutputData {
  token: string,
}

interface RegisterUseCaseOutput extends UseCaseOutput<RegisterUseCaseOutputData> {}

export default RegisterUseCaseOutput
