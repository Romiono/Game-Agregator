import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import AuthPage from "../Pages/AuthPage.tsx";
import Main from "../Pages/Main.tsx";
import Profile from "../Pages/Profile.tsx";
import Dashbord from "../Pages/Dashbord.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                element: <AuthPage/>,
                path: '/login',
            },
            {
                element: <Main/>,
                path: '/main',
            },
            {
                element: <Profile/>,
                path: '/profile',
            },
            {
                element: <Dashbord/>,
                path: '/admin',
            },
        ],
    },
]);

export default router;