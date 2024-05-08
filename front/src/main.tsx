import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {Provider} from 'react-redux';
import {store} from "./Store/store.ts";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AuthPage from "./Pages/AuthPage.tsx";
import Main from "./Pages/Main.tsx";
import Profile from "./Pages/Profile.tsx";

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
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
);
