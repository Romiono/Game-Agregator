import {createSlice} from "@reduxjs/toolkit";

interface UserSlice {
    id: string | null,
    name: string | null,
    password: string | null,
    token: string | null,
    isAuth: boolean
}

const initialState: UserSlice = {
    id: null,
    name: null,
    password: null,
    token: null,
    isAuth: false
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            return state;
        },
        logout: (state) => {
            return state;
        }
    }
});

export const {  logout, login } = UserSlice.actions

export default UserSlice.reducer