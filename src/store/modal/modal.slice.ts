import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './modal.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: IInitialState<any> = {
	nameModal: null,
	data: null,
};

const modalSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		openModal(state, actions) {
			state.nameModal = actions.payload.nameModal;
			state.data = actions.payload.data ? actions.payload.data : null;
			document.body.style.overflow = 'hidden';
		},

		closeAllModals(state) {
			state.nameModal = null;
			state.data = null;
			document.body.style.overflow = 'auto';
		},
	},
});

export const { openModal, closeAllModals } = modalSlice.actions;

export default modalSlice.reducer;
