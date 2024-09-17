import clsx from 'clsx';
import { ICloseIcon } from './CloseIcon.interface';
import styles from './CloseIcon.module.css';

const CloseIcon = ({ className }: ICloseIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsx(className, styles.icon)}
		>
			<path
				d="M5.00098 5L19 18.9991"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.99996 18.9991L18.999 5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default CloseIcon;
