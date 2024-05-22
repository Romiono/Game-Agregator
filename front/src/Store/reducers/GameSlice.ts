// store/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import pingSound from '../../Assets/sounds/ping.mp3';
const initialState = {
    count: 0,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.count += 1;
        },
        resetCount: (state) => {
            state.count = 0;
        },
        pong: (state, action) => {
            const velocity = action.payload;
            const audio = new Audio(pingSound);
            audio.currentTime = 0;
            audio.volume = Math.min(velocity / 20, 1);
            audio.play();
            if (velocity > 10) state.count += 1;
        },
    },
});

export const { incrementCount, resetCount, pong } = gameSlice.actions;
export default gameSlice.reducer;
