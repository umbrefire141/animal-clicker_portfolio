import instruction1 from '@/assets/images/instructions/instruction-1.png';
import instruction2 from '@/assets/images/instructions/instruction-2.png';
import instruction3 from '@/assets/images/instructions/instruction-3.png';
import instruction4 from '@/assets/images/instructions/instruction-4.png';
import instruction5 from '@/assets/images/instructions/instruction-5.png';
import instruction6 from '@/assets/images/instructions/instruction-6.png';

import { CSSProperties, ReactNode } from 'react';
import SelectCharacter from '../../components/shared/SelectCharacter/SelectCharacter';
import SelectLanguage from '../../components/shared/SelectLanguage/SelectLanguage';

export const instructions: instructionType[] = [
	{
		id: 1,
		title: 'Выберите язык',
		description: 'Выберите предпочитаемый язык из списка',
		additionitem: <SelectLanguage />,
		imgStyles: {
			width: '355px',
			height: '223px',
		},
		image: instruction1,
	},
	{
		id: 2,
		title: 'Зарабатывайте монеты с умом',
		description:
			'Вы можете нажимать на экран и зарабатывать монеты, применяя при этом продуманные стратегии!',
		imgStyles: {
			width: '355px',
			height: '223px',
			boxShadow: 'none',
			top: '3%',
			bottom: 0,
		},
		image: instruction2,
	},
	{
		id: 3,
		title: 'Усиления для заработка $',
		description:
			'Покупая NFTскины можете зарабатывать настоящие деньги и выводить в течение 5 минут',
		image: instruction3,
		imgStyles: {
			width: '355px',
			height: '223px',
		},
	},
	{
		id: 4,
		title: 'Приглашайте рефералов и получайте бонусы',
		description:
			'Приглашайте рефералов и получайте бонусы вместе. Вы и ваш реферал получите монеты',
		image: instruction4,
		imgStyles: {
			width: '355px',
			height: '223px',
		},
	},
	{
		id: 5,
		title: 'Повышайте уровень и прибыль',
		description:
			'Ваш опыт увеличивается с каждым улучшением. По мере повышения уровня растёт ваша прибыль за каждый тап и открываются новые возможности для улучшений',
		image: instruction5,
		imgStyles: {
			width: '355px',
			height: '223px',
		},
	},
	{
		id: 6,
		title: 'Обменивайте монеты на AirDrop токенов',
		description:
			'Используйте монеты для получения AirDrop при листинге токенов',
		image: instruction6,
		imgStyles: {
			width: '355px',
			height: '223px',
		},
	},
	{
		id: 7,
		title: 'Выбери своего персонажа',
		additionitem: <SelectCharacter />,
	},
];

export type instructionType = {
	id: number;
	title: string;
	description?: string;
	image?: string;
	bgImg?: string;
	imgStyles?: CSSProperties;
	additionitem?: ReactNode;
};
