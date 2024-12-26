import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, replace, useLocation } from 'react-router-dom'

const AdminRoute = ({ children }) => {
    const admin = useSelector(state => state.adminAtuh)
    console.log(admin, 'admin')
    const location = useLocation()
    if (!admin.accessToken) return <Navigate to='/admin-login' />
    return children ? children : <Outlet />
}

export default AdminRoute
