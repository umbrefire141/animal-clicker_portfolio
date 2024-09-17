import { Dispatch, SetStateAction } from 'react';

export interface ICharacter {
	setPoints: Dispatch<SetStateAction<number>>;
}
