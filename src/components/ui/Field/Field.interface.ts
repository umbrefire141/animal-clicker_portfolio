import { HTMLAttributes, ReactNode } from 'react';

export interface IFieldComponent extends HTMLAttributes<HTMLInputElement> {
	placeholder: string;
	type: string;
	icon?: ReactNode;
	color?: 'purple' | 'clear';
}
