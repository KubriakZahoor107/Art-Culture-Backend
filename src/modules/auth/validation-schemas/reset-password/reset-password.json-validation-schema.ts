import { z } from 'zod'

const resetPasswordJsonValidationSchema = z.object({
  email: z.string().email('Enter a valid email'),
})

export type ResetPasswordInput = z.infer<typeof resetPasswordJsonValidationSchema>
export default resetPasswordJsonValidationSchema
