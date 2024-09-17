export const leaderships: ILeadership[] = [
	{
		id: 1,
		title: 'Beginner',
		percentBestPlayers: 30,
		users: [1, 2, 3],
	},
	{
		id: 2,
		title: 'Gold',
		percentBestPlayers: 20,
		users: [1, 2],
	},
];

export interface ILeadership {
	id: number;
	title: string;
	percentBestPlayers: number;
	users: number[];
}
