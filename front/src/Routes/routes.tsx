import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import AuthPage from "../Pages/AuthPage.tsx";
import Main from "../Pages/Main.tsx";
import Profile from "../Pages/Profile.tsx";
import Dashbord from "../Pages/Dashbord.tsx";
import GameSlider from "../Pages/GameSlider.tsx";
import GameCanvas from "../Games/GameCanvas.tsx";


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
            {
                element: <GameSlider/>,
                path: '/games'
            },
            {
                path: '/game',
                element:  <GameCanvas ready={true}/>
            },
        ],
    },

]);

export default router;