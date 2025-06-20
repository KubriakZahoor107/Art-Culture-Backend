import registerFilesValidationSchema from '../validation-schemas/register/register.files-validation-schema'
import registerJsonValidationSchema from '../validation-schemas/register/register.json-validation-schema'

const registerValidator = {
  jsonSchema: registerJsonValidationSchema,
  filesSchema: registerFilesValidationSchema,
}

export default registerValidator
