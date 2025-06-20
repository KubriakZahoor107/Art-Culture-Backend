import asyncHandler from './async-handler.middleware'

const wrap = (middlewares: Function[]) => middlewares.map(m => asyncHandler(m))

export default wrap
