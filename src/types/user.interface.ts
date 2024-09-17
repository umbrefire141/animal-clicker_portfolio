export interface IUser {
	uuid: string;
	first_name: string;
	username: string;
	level: ILevel;
	energy: IEnergy;
	profit: number;
	coins: number;
	isInstructioned: boolean;
	isSelectedCharacter: boolean;
}

export interface ILevel {
	current: number;
	sum: number;
}

export interface IEnergy {
	current: number;
	max: number;
}
