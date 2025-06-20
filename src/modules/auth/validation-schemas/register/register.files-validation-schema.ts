import z from 'zod'

import { profileImageMaxSize } from '../../consts/auth.consts'

const registerFilesValidationSchema = z.object({
  profileImage: z
    .array(z.any())
    .nonempty({ message: 'is required' })
    .max(1, { message: 'should have at most 1 file' })
    .transform((value) => value[0])
    .pipe(
      z.object({
        mimetype: z.enum(
          [
            'image/jpeg',
            'image/png',
            'image/jpg',
            'image/webp',
            'image/svg+xml',
          ],
          {
            message: 'should be a valid image',
          },
        ),
        size: z
          .number()
          .max(
            profileImageMaxSize,
            {
              message: 'should be less than 20 MB',
            },
          ),
      }),
    )
})

export default registerFilesValidationSchema
