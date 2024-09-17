import { HtmlHTMLAttributes } from 'react';

export interface IButtonComponent
	extends HtmlHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	variant?: 'outline' | 'full';
	color?: 'purple' | 'gradient' | 'clear';
}
