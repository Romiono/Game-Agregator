
import {useState} from "react";
import {registerNewUser} from "../auth/registerUser.ts";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {auth} from "../auth/authUser.ts";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // @ts-ignore
    const openRegister = () => document.getElementById('my_modal_1').showModal();
    // @ts-ignore
    const openLogin = () => document.getElementById('my_modal_2').showModal();

    const userisLogining = () => {
        dispatch(auth(user));
        navigate('/main')
    }
    return (
        <div className={'w-full h-full flex justify-center items-center gap-3'}>
            <button className="btn w-36" onClick={openLogin}>
                Login
            </button>
            <button className="btn w-36" onClick={openRegister}>
                Registration
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Registration</h3>
                    <div className="modal-action">
                        <form className={"w-full flex flex-col gap-2"} method="dialog">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                                </svg>
                                <input type="text" className="grow" placeholder="Username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd"
                                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <input type="password" className="grow" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
                            </label>
                            <button className={'btn w-full'} onClick={() => registerNewUser(user)}>Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className="modal-action">
                        <form className={'w-full flex flex-col gap-2'} method="dialog">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                                </svg>
                                <input type="text" className="grow" placeholder="Username" value={user.username}
                                       onChange={(e) => setUser({...user, username: e.target.value})}/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd"
                                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <input type="password" className="grow w-full" value={user.password}
                                       onChange={(e) => setUser({...user, password: e.target.value})}/>
                            </label>
                            <button className={'btn w-full'} onClick={() => userisLogining()}>Войти</button>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
};

export default AuthPage;