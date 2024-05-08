import {useAppSelector} from "../Hooks/reduxHooks.ts";

const Profile = () => {
    const {id, username, token} = useAppSelector(state => state.user);
    return (
        <div className={'container mx-auto p-5'}>
            <h3 className={'text-2xl'}>имя: {username}</h3>
            <h5 className={'text-sm'}>id: {id}</h5>
            <p className={'text-xs break-all'}>токен(временно, для разработки) <br/> {token}</p>
        </div>
    );
};

export default Profile;