import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics"
import Donations from "../Pages/NewDonations/Donations";

const Router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/Donations.json')
            },
            {
            path: "/donations",
            element: <Donations></Donations>
            },
            {
                path: "/donation/:id",
                element: <Donation></Donation>,
                loader: () => fetch('/Donations.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])


export default Router;