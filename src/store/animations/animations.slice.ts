import { createSlice } from '@reduxjs/toolkit';
import { IAnimations } from './animations.interface';

const initialState: IAnimations = {
	started: false,
	coins: null,
};

const animationsSlice = createSlice({
	name: 'animations',
	initialState,
	reducers: {
		startAnimations(state, actions) {
			state.started = true;
			state.coins = actions.payload.coins;
		},
		endAnimations(state) {
			state.started = false;
			state.coins = null;
		},
	},
});

export const { startAnimations, endAnimations } = animationsSlice.actions;

export default animationsSlice.reducer;
