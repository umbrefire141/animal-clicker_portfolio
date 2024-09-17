import clsx from 'clsx';
import { IFieldComponent } from './Field.interface';
import styles from './Field.module.css';

const Field = ({
	className,
	type = 'text',
	placeholder,
	color = 'purple',
	icon,
	...rest
}: IFieldComponent) => {
	return (
		<div
			className={clsx(className, styles.input, {
				[styles.purple]: color === 'purple',
				[styles.clear]: color === 'clear',
			})}
		>
			{icon}
			<input
				placeholder={placeholder}
				type={type}
				className={styles.field}
				{...rest}
			/>
		</div>
	);
};

export default Field;
