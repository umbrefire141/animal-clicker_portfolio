import { createSlice } from '@reduxjs/toolkit';
import { buyImprovement, getMe, setInstructioned } from './user.action';
import { IInitilaState } from './user.interface';

const initialState: IInitilaState = {
	isLoading: false,
	user: {
		uuid: '141arw',
		coins: 1000,
		username: 'tea',
		energy: { current: 1000, max: 1000 },
		first_name: 'tea',
		isInstructioned: false,
		isSelectedCharacter: false,
		level: { current: 1, sum: 14 },
		profit: 1000,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setInstructionedSync: state => {
			state.user.isInstructioned = true;
		},
		setSelectedCharacter: state => {
			state.user.isSelectedCharacter = true;
		},
	},
	extraReducers: builder => {
		builder.addCase(getMe.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getMe.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
		});
		builder.addCase(buyImprovement.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(buyImprovement.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
		});
		builder.addCase(setInstructioned.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(setInstructioned.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
		});
	},
});

export const { setInstructionedSync, setSelectedCharacter } = userSlice.actions;

export default userSlice.reducer;
