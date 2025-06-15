import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import morgan from 'morgan'
import * as path from 'node:path'
import * as url from 'node:url'

import authRoute from './modules/auth/routes/auth.route.js'
import errorHandler from './shared/middlewares/error-handler.middleware.js'

dotenv.config()

const app = express()

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('trust proxy', true)

app.use(express.json())

// Security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ['self'],
        scriptSrc: ['unsafe-inline', 'self'],
        //styleSrc: [''''],
        imgSrc: [
          'self',
          'data:',
          'blob:',
          'https://*.tile.openstreetmap.org',
        ], // Added 'blob:' here
        connectSrc: ['self'],
        //fontSrc: ['self'],
        objectSrc: ['none'],
        mediaSrc: ['self'],
        frameSrc: ['none'],
      },
    },
  }),
)

// CORS Configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
)

// Rate Limiting
const limiter = rateLimit({
  windowMs: 0.2 * 60 * 1000, // 2 sec
  max: 10000, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
})
app.use(limiter)

// HTTP request logger
app.use(morgan('combined'))

// Middleware to parse JSON
app.use(express.json())

// Enforce HTTPS
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
      next()
    } else {
      res.redirect(`https://${req.headers.host}${req.url}`)
    }
  })
}

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(
  '/uploads/profileImages',
  express.static(path.join(__dirname, 'uploads/profileImages')),
)

app.use('/api/auth', authRoute)
// app.use('/api/posts', postRoutes)
// app.use('/api/admin', adminRoutes)
// app.use('/api/products', productRoutes)
// app.use('/api/users', userRoutes)
// app.use('/api/posts/postId', postRoutes)
// app.use('/api/exhibitions', exhibitionRoutes)
// app.use('/api/art-terms', artTermsRoutes)
// app.use('/api/search', searchRoutes)
// app.use('/api/geo', geoRoutes)
// app.use('/api/like', likeRoutes)

app.use(errorHandler)

export default app
