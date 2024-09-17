import { Dispatch, SetStateAction } from 'react';
import { ICharacter } from '../characters.const';

export interface IInformation {
	character: ICharacter;
	images: IImage[];
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
}

export interface IImage {
	id: number;
	img: string;
}
