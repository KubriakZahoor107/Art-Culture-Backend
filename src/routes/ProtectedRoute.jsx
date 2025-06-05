// src/components/ProtectedRoute.jsx

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSession } from 'next-auth/react'

const ProtectedRoute = ({ children, roles = [] }) => {
        const { data: session, status } = useSession()
        const user = session?.user
        const isLoggedIn = !!user && status === 'authenticated'

	if (!isLoggedIn || !user) {
		return <Navigate to='/login' replace />
	}

	if (roles.length && !roles.includes(user.role)) {
		// User does not have the required role
		return <Navigate to='/unauthorized' replace />
	}

	return children
}

export default ProtectedRoute
