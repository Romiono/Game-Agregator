import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserSlice {
    id: string | null,
    username: string | null,
    roles: string[] | null,
    token: string | null,
    isAuth: boolean
}

const initialState: UserSlice = {
    id: null,
    username: null,
    roles: [],
    token: null,
    isAuth: false
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserSlice>) => {
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.roles = action.payload.roles;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        logout: (state) => {
            state.username = null;
            state.id = null;
            state.roles = null;
            state.token = null;
            state.isAuth = false;
        }
    }
});

export const {  logout, login } = UserSlice.actions

export default UserSlice.reducer