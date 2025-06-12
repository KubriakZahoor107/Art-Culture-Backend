// src/middleware/postMiddleware.js

// Example: Logging middleware for post actions
export const logPostActions = (req, res, next) => {
  // Log post actions if needed; replace with a proper logger in production
  next()
}

// Export other middlewares as needed
