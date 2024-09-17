import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './drawer.interface';

const initialState: IInitialState = {
	nameDrawer: null,
	data: null,
};

const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		openDrawer(state, actions) {
			state.nameDrawer = actions.payload.nameDrawer;
			state.data = actions.payload.data ? actions.payload.data : null;
			document.body.style.overflow = 'hidden';
		},

		closeAllDrawers(state) {
			state.nameDrawer = null;
			state.data = null;
			document.body.style.overflow = 'auto';
		},
	},
});

export const { openDrawer, closeAllDrawers } = drawerSlice.actions;

export default drawerSlice.reducer;
