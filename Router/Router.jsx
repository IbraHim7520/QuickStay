import { createBrowserRouter } from "react-router";
import Root from "../src/Pages/Root"
import Home from "../src/Pages/Home"
import Rooms from "../src/Pages/Rooms"
import Login from "../src/Pages/Login";
import Signup from "../src/Pages/Signup";
const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        children: [

            {
                index: true,
                Component: Home
            },
            {
                path: '/rooms',
                Component: Rooms
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/signup",
                Component: Signup
            }
        ]
    }
])
export default router