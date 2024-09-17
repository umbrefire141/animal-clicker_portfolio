import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBuyImprovementData } from '../../services/improvements/improvements.interface';
import improvementsService from '../../services/improvements/improvements.service';
import { IInputUser } from '../../services/users/users.interface';
import usersService from '../../services/users/users.service';

export const getMe = createAsyncThunk(
	'users/getMe',
	async (data: IInputUser) => {
		const user = await usersService.getMe(data);

		return user;
	}
);

export const setInstructioned = createAsyncThunk(
	'users/setInstructioned',
	async (data: { uuid: string }) => {
		const user = await usersService.setInstructioned(data);

		return user;
	}
);

export const buyImprovement = createAsyncThunk(
	'users/buy-improvement',
	async (data: IBuyImprovementData) => {
		return await improvementsService.buyImprovement(data);
	}
);
