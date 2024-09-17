import { PropsWithChildren } from 'react';

export interface ITextComponent extends PropsWithChildren {
	color?: 'white' | 'gray' | 'purple';
	className?: string;
}
