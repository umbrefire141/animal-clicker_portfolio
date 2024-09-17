import { Dispatch, SetStateAction } from 'react';

export interface IBanner {
	title: string;
	percentBestPlayers: number;
	setSelectedTab: Dispatch<SetStateAction<number>>;
}
