import img1 from '@/assets/images/animals/bear/model_character_1.svg';
import img2 from '@/assets/images/animals/bear/model_character_2.svg';
import img3 from '@/assets/images/animals/bear/model_character_3.svg';
import img4 from '@/assets/images/animals/bear/model_character_4.svg';
import img5 from '@/assets/images/animals/bear/model_character_5.svg';
import img6 from '@/assets/images/animals/bear/model_character_6.svg';

export const characters: ICharacter[] = [
	{
		id: 1,
		img: {
			id: 1,
			img: img1,
		},
		name: 'Медведь-гризли',
		description:
			'мощный и неукротимый персонаж, который приносит большие бонусы за каждое нажатие',
	},
	{
		id: 2,
		img: {
			id: 2,
			img: img2,
		},
		name: 'Медведь-гризли',
		description:
			'мощный и неукротимый персонаж, который приносит большие бонусы за каждое нажатие',
	},
	{
		id: 3,
		img: {
			id: 3,
			img: img3,
		},
		name: 'Медведь-гризли',
		description:
			'мощный и неукротимый персонаж, который приносит большие бонусы за каждое нажатие',
	},
	{
		id: 4,
		img: {
			id: 4,
			img: img4,
		},
		name: 'Медведь-гризли',
		description:
			'мощный и неукротимый персонаж, который приносит большие бонусы за каждое нажатие',
	},
	{
		id: 5,
		img: {
			id: 5,
			img: img5,
		},
		name: 'Медведь-гризли',
		description:
			'мощный и неукротимый персонаж, который приносит большие бонусы за каждое нажатие',
	},
	{
		id: 6,
		img: {
			id: 6,
			img: img6,
		},
		name: 'Медведь-гризли',
		description:
			'мощный и неукротимый персонаж, который приносит большие бонусы за каждое нажатие',
	},
];

export interface ICharacter {
	id: number;
	name: string;
	description: string;
	img: ICharacterImg;
}

export interface ICharacterImg {
	id: number;
	img: string;
}
