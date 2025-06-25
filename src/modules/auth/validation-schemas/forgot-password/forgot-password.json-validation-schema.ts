import { z } from 'zod'

const forgotPasswordJsonValidationSchema = z.object({
  email: z
    .string()
    .email('Enter a valid email'),
})

export type ForgotPasswordInput = z.infer<typeof forgotPasswordJsonValidationSchema>
export default forgotPasswordJsonValidationSchema
