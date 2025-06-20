import { z } from 'zod'

export const loginJsonValidationSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type LoginInput = z.infer<typeof loginJsonValidationSchema>
