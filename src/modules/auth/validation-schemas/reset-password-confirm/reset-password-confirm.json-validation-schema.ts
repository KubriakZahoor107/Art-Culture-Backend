import { z } from 'zod'

export const resetPasswordConfirmJsonValidationSchema = z.object({
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long'),
  token: z.string({
    message: 'should be a string',
  }),
  userId: z.number({
    message: 'should be a number',
  }),
})

export type ResetPasswordConfirmInput = z.infer<typeof resetPasswordConfirmJsonValidationSchema>
