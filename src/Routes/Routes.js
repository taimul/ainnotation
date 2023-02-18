import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import Pricing from "../Components/Pages/Pricing/Pricing";
import Services from "../Components/Pages/Services/Services";
import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/services',
                element:<Services/>
            },
        
            {
                path:'/prices',
                element:<Pricing/>
            },
        
            {
                path:'/contactUs',
                element:<ContactUs/>
            }
        ]
    }
])

export default router;