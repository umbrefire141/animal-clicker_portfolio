import { Dispatch, SetStateAction } from 'react';

export interface ITabs {
	tabs: ITab[];
	selectedTab: number;
	setSelectedTab: Dispatch<SetStateAction<number>>;
}

export interface ITab {
	id: number;
	type: string;
}
