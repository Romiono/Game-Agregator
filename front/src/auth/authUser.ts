import axios from "axios";
import authUser from "../models /authUser.ts";
import  {login} from "../store/reducers/UserSlice.ts";
import {AppDispatch} from "../store/store.ts";

export const auth = (user: authUser) => async (dispatch : AppDispatch)=> {

        try {
            const {data} = await axios.post(
                'http://localhost:5027/auth/login',
                user,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            dispatch(login(data.user));
            localStorage.setItem('token', data.user.token);
        } catch (e) {
            console.log(e);
        }
    }

