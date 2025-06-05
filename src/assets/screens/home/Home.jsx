import Login from '@components/VerificationPages/LoginPage'
import SignUp from '@components/VerificationPages/SignUpPage'
import React from 'react'

import Exhibition from '../../screens/ExhibitionList/Exhibitions'
import AdminDashboard from '../Admin/AdminDashboard'
import Layout from '../layout/Layout'
import UserProfile from '../userProfile/userProfile'

function Home() {
	return (
                <Layout>
                        <UserProfile />
                        <AdminDashboard />
                        <SignUp />
                        <Login />
                        <Exhibition />
                </Layout>
        )
}

export default Home
