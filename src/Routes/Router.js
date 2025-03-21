import { createBrowserRouter } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Home from '../Home'

const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
])

export default router