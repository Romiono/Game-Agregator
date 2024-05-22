import {combineReducers, configureStore} from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserSlice.ts";
import GameReducer from "./reducers/GameSlice.ts";

const rootReducer = combineReducers({
    user: UserReducer,
    game: GameReducer
});


export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

