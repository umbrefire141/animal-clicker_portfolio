import { Dispatch, SetStateAction } from 'react';

export interface ISliderComponent {
	images: string[];
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
}
