import { createBrowserRouter } from "react-router";
import Root from "../src/Pages/Root"
import Home from "../src/Pages/Home"
const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        children: [

            {
                index: true,
                Component: Home
            }
        ]
    }
])
export default router