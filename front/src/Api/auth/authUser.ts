import axios, {AxiosError} from "axios";
import authUser from "../../Models/authUser.ts";
import {login, pending, pendingIsError} from "../../Store/reducers/UserSlice.ts";
import {AppDispatch} from "../../Store/store.ts";


export class AuthUser {
    static auth = (user: authUser) => async (dispatch: AppDispatch) => {
        try {
            dispatch(pending());
            const {data} = await axios.post(
                process.env.BASE_URL + '/auth/login',
                user,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            dispatch(login(data.user));
            localStorage.setItem('token', data.user.token);
        } catch (error: AxiosError | any) {
            dispatch(pendingIsError(error.message));
            console.log(error);
        } finally {
            dispatch(pending());
        }
    };

    static registerNewUser = (user: authUser) => async (dispatch: AppDispatch) => {
        try {
            dispatch(pending());
            await axios.post(
                process.env.BASE_URL + '/auth/registration',
                user,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
        } catch (e: AxiosError | any) {
            console.log(e);
            dispatch(pendingIsError(e.message));
        } finally {
            dispatch(pending());
        }
    };

}
