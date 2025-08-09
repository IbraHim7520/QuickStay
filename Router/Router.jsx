import { createBrowserRouter } from "react-router";
import Root from "../src/Pages/Root"
import Home from "../src/Pages/Home"
import Rooms from "../src/Pages/Rooms"
import Login from "../src/Pages/Login";
import MyBookings from "../src/Pages/MyBookings"
import Signup from "../src/Pages/Signup";
import RoomDetails from "../src/Pages/RoomDetails";
import Error from "../src/Pages/Error";
const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        children: [

            {
                index: true,
                Component: Home,
                errorElement: Error
            },
            {
                path: '/rooms',
                Component: Rooms,
                errorElement:Error
            },
            {
                path: "/login",
                Component: Login,
                errorElement:Error
            },
            {
                path: "/signup",
                Component: Signup,
                errorElement:Error
            },
            {
                path: "/my-bookings",
                Component: MyBookings,
                errorElement:Error
            },
            {
                path: "/rooms_details/:id",
                loader: ({params})=> fetch(`https://mern-hotel-booking-a11.vercel.app/get_oneroom/${params.id}`),
                Component: RoomDetails,
                errorElement:Error
            },
            {
                path: '*',
                element: <Error></Error>
            }

        ],
        errorElement:Error
    }
])
export default router