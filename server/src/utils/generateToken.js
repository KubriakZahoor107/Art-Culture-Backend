import jwt from 'jsonwebtoken'

const generateToken = user => {
        if (!user.id) {
		throw new Error('User ID is missing during token generation')
	}
	const payload = {
		id: user.id,
		role: user.role,
		email: user.email,
	}
	return jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: '5h',
	})
}

export default generateToken
