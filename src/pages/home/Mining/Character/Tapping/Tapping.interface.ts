import { HTMLProps } from 'react';

export interface ITappingComponent extends HTMLProps<HTMLDivElement> {
	clientX: number;
	clientY: number;
	pointsToAdd: number;
}
