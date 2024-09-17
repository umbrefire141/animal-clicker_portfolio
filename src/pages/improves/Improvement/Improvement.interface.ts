export interface IProductComponent {
	img: string;
	title: string;
	information: IInformation;
	description: string;
}

export interface IInformation {
	cost: number;
	profit: number;
	required_level: number;
	level: number;
}
