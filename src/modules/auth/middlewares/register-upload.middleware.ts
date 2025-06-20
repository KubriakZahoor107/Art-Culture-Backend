import multer, { memoryStorage } from 'multer'

const upload = multer({
  storage: memoryStorage(),
})

export default upload.fields([
  {
    name: 'profileImage',
    maxCount: 1,
  },
  {
    name: 'museumLogo',
    maxCount: 1,
  },
])
