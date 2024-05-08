import axios, {AxiosError} from "axios";
import authUser from "../models /authUser.ts";
import {AppDispatch} from "../store/store.ts";
import {pending, pendingIsError} from "../store/reducers/UserSlice.ts";


export const registerNewUser = (user: authUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pending());
        await axios.post(
            'http://localhost:5027/auth/registration',
            user,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    } catch (e: AxiosError | any) {
        console.log(e)
        dispatch(pendingIsError(e.message));
    } finally {
        dispatch(pending());
    }
}

