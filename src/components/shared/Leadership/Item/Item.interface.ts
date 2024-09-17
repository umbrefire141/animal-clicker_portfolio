import { Dispatch, SetStateAction } from 'react';
import { ILeadership } from '../leadership.const';

export interface IItem {
	setSelectedTab: Dispatch<SetStateAction<number>>;
	leadership: ILeadership;
}
