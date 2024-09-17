import clsx from 'clsx';
import { ITextComponent } from './Text.interface';
import styles from './Text.module.css';

const Text = ({ className, color = 'white', children }: ITextComponent) => {
	return (
		<div
			className={clsx(className, styles.text, {
				[styles.gray]: color === 'gray',
				[styles.purple]: color === 'purple',
			})}
		>
			{children}
		</div>
	);
};

export default Text;
