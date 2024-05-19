import {useAppSelector} from "../Hooks/reduxHooks.ts";
import avatar from '../Assets/profile.webp';
import {useState} from "react";
import {UserApi} from "../Api/user/UserApi.ts";
import Loader from "../Componets/UI/Loader.tsx";


const Profile = () => {
    const {id, username, roles} = useAppSelector(state => state.user);
    const [onEditName, setOnEditName] = useState<boolean>(false);
    const [onEditPassword, setOnEditPassword] = useState<boolean>(false);
    const [newData, setNewData] = useState({
        newUsername: '',
        newPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const updateUserName = async () => {
        try {
            setError('');
            setLoading(true);
            await UserApi.changeName(id!, newData.newUsername);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const updateUserPassword = async () => {
        try {
            setError('');
            setLoading(true);
            await UserApi.changePassword(id!, newData.newPassword);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={'container flex justify-center mx-auto p-5 gap-4'}>
            <div className={'w-1/4'}>
                <img className={'border-2 rounded-2xl '} src={avatar} alt="avatar"/>
            </div>
            <div className={'flex flex-col gap-2'}>
                <h5 className={'text-2xl'}>id: {id}</h5>

                <h3 className={'text-2xl'}>username: {username}</h3>
                <p className={'text-2xl'}>role: {roles}</p>
                <div className="collapse collapse-arrow border border-base-300 bg-base-200 relative">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium">
                        Edit profile
                    </div>
                    <div className="collapse-content flex flex-col gap-2">
                        <button onClick={() => setOnEditName(!onEditName)} className={'btn btn-outline w-full'}>
                            change username
                        </button>
                        <button onClick={() => setOnEditPassword(!onEditPassword)} className={'btn btn-outline'}>
                            change password
                        </button>
                        {onEditName &&
                            <div className={'flex gap-2'}>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                         className="w-4 h-4 opacity-70">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                                    </svg>
                                    <input type="text" className="grow" placeholder="Username"
                                           value={newData.newUsername}
                                           onChange={(e) => setNewData({...newData, newUsername: e.target.value})}/>
                                </label>
                                <button onClick={updateUserName} className={'btn btn-success'}>Send</button>
                            </div>
                        }
                        {
                            onEditPassword &&
                            <div className={'flex gap-2'}>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                         className="w-4 h-4 opacity-70">
                                        <path fillRule="evenodd"
                                              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <input type="password" className="grow" value={newData.newPassword}
                                           onChange={(e) => setNewData({...newData, newPassword: e.target.value})}/>
                                </label>
                                <button onClick={updateUserPassword} className={'btn btn-success'}>Send</button>
                            </div>
                        }
                        <p className={'text-red-600'}>{error && error}</p>
                    </div>
                    {loading && <div
                        className={'absolute w-full h-full bg-neutral-500 bg-opacity-30 flex justify-center items-cenere'}>
                        <Loader/>
                    </div>}
                </div>
            </div>
        </div>

    );
};

export default Profile;