import { PropsWithChildren } from 'react';

export interface IDrawerComponent extends PropsWithChildren {
	direction?: 'row' | 'column';
	className?: string;
	outsideIsClosed?: boolean;
	color?: 'dark' | 'lighter';
	closeButton?: boolean;
}
