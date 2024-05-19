import {useEffect, useState} from "react";
import {AdminApi} from "../Api/admin/AdminApi.ts";
import {useAppSelector} from "../Hooks/reduxHooks.ts";
import {useNavigate} from "react-router-dom";

interface IUser {
    _id: string;
    username: string;
    roles: string[]
}

const Dashbord = () => {
    const [users, setUsers] = useState<IUser[]>();
    const role = useAppSelector(state => state.user.roles);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAdmin()) {
            navigate('main')
        } else {
            fetchAllUsers();
        }
    }, []);

    const fetchAllUsers = async () => {
        const response: IUser[] = await AdminApi.fetchUsers();
        console.log(response);
        setUsers(response);
    }

    const isAdmin = () => {
        return role.includes('ADMIN')
    }

    const handleDelete = async (id: string) => {
        await AdminApi.ban(id);
        setUsers(prevUsers => prevUsers!.filter(user => user._id !== id));
    };
    return (
        <div className={'flex flex-col items-center justify-between p-5 h-dvh'}>
            <div className="overflow-x-auto">
                <table className="table table-lg bg-neutral-700">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Roles</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users && users.map(user =>
                        <tr key={user._id}>
                            <th>{user._id}</th>
                            <td>{user.username}</td>
                            <td>{user.roles}</td>
                            <td><button onClick={() => handleDelete(user._id)} className={'btn btn-error btn-outline'}>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashbord;