import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserSlice {
    id: string | null,
    username: string | null,
    roles: string[] | null,
    token: string | null,
    isAuth: boolean,
    isLoading: boolean,
    error: string,
}

const initialState: UserSlice = {
    id: null,
    username: null,
    roles: [],
    token: null,
    isAuth: false,
    isLoading: false,
    error: '',
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        pendingIsError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        pending: (state) => {
            state.isLoading = !state.isLoading;
        },
        login: (state, action: PayloadAction<UserSlice>) => {
            state.error = '';
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
        },
    },
});

export const {  logout, login, pending, pendingIsError } = UserSlice.actions;

export default UserSlice.reducer;
