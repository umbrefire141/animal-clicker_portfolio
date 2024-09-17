import { PropsWithChildren } from 'react';

export interface IModalComponent extends PropsWithChildren {
	className?: string;
	position?: 'top' | 'bottom' | 'center';
}
