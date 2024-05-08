import './App.css';
import './index.css';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./Hooks/reduxHooks.ts";
import {logout} from "./Store/reducers/UserSlice.ts";

function App() {
    const {isAuth} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const userLogOut = () => {
        dispatch(logout());
        navigate('/login');
    };
    return (
        <div className={"w-full h-full flex flex-col"}>
            <div className="navbar bg-base-100">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        {isAuth ?
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                                <li><Link to={'/main'} className="font-bold text-xl">Main</Link></li>
                                <li><Link to={'/profile'} className="font-bold text-xl">Profile</Link></li>
                                <li>
                                    <button onClick={userLogOut} className={'btn'}>Logout</button>
                                </li>

                            </ul> :
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={'/login'} className="btn">Login</Link></li>
                            </ul>
                        }
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {isAuth ?
                        <ul className="menu menu-horizontal px-1 flex gap-3">
                            <li><Link to={'/main'} className="font-bold text-xl">Main</Link></li>
                            <li><Link to={'/profile'} className="font-bold text-xl">Profile</Link></li>
                            <li><button onClick={userLogOut} className={'btn'}>Logout</button></li>
                        </ul>
                        :
                        <Link to={'/login'} className="btn">Login</Link>
                    }
                </div>
            </div>
            <div className={'container mx-auto h-full'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
