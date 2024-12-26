import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../components/home/Home'
import NotFound from '../components/notFound/NotFound'
import About from '../components/about/About'
import Orders from '../components/orders/Orders'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Cart from '../components/cart/Cart'
import CheckPayment from '../components/CheckPayment/CheckPayment'
import SingleBook from '../components/SingleBook/SingleBook'
import CarDrivingSchool from '../components/sample/CarDrivingSchool'
import OrderList from '../components/ordersList/OrderList'
import Dashbord from '../components/adminDashbord/Dashbord'
import AdminLogin from '../components/adminDashbord/AdminLogin'
import AdminRoute from './AdminRoute'
import AddBook from '../components/adminDashbord/AddBook/AddBook'
import DashboardLayout from '../components/adminDashbord/DashboardLayout'
import UpdateBook from '../components/adminDashbord/UpdateBook'
import ManageBooks from '../components/adminDashbord/ManageBooks'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/orders',
                element: <Orders />

            },
            {
                path: '/order/:email',
                element: <OrderList />

            },
            {
                path: '/about',
                element: <About />

            },
            {
                path: '/login',
                element: <Login />

            },
            {
                path: '/register',
                element: <Register />

            },
            {
                path: '/cart',
                element: <Cart />

            },
            {
                path: '/checkpayment',
                element: <CheckPayment />

            },
            {
                path: '/book/:id',
                element: <SingleBook />

            },
            {
                path: '/main',
                element: <CarDrivingSchool />

            },
        ]
    },

    {
        path: '/dashboard',
        element: <AdminRoute> <DashboardLayout /></AdminRoute>,
        children: [
            {
                path: '',
                element: <Dashbord />,
            },
            {
                path: 'add-new',
                element: <AddBook />,
            },
            {
                path: 'edit-book/:id',
                element: <UpdateBook />,
            },
            {
                path: 'manage-books',
                element: <ManageBooks />,
            },
        
        ]
    },
    {
        path: 'admin-login',
        element: <AdminLogin />
    },
    {
        path: '*',
        element: <NotFound />
    }
], {
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true
    }
})