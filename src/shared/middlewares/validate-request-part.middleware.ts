import ValidateRequestPartOptions from '../types/interfaces/valdate-request-part-options'

const validateRequestPart = async (options: ValidateRequestPartOptions) => {
  let data

  const {
    req,
    part,
    schema,
  } = options
  console.log(req.files)
  switch (part) {
    case 'json':
      data = req.body

      break
  
    case 'files':
      data = req.files

      break
  
    default:
      break
  }

  schema.parse(data)
}

export default validateRequestPart
