import { z } from 'zod'

const resetPasswordJsonValidationSchema = z.object({
  token: z.string({ message: 'should be a string' }),
  newPassword: z
    .string()
    .min(6, 'Password must be at least 6 characters long'),
})

export type ResetPasswordInput = z.infer<typeof resetPasswordJsonValidationSchema>
export default resetPasswordJsonValidationSchema
