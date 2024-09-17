import clsx from 'clsx';
import { IButtonComponent } from './Button.interface';
import styles from './Button.module.css';

const Button = ({
	children,
	variant = 'full',
	disabled = false,
	color = 'gradient',
	className,
	...rest
}: IButtonComponent) => {
	return (
		<div
			className={clsx(className, {
				[styles.full_wrapper]: variant === 'full',
				[styles.outline]: variant === 'outline',
			})}
			data-disabled={disabled}
		>
			<button
				className={clsx(styles.btn, {
					[styles.full]: variant === 'full',
					[styles.outline_btn]: variant === 'outline',
					[styles.gradient]: color === 'gradient',
					[styles.purple]: color === 'purple',
					[styles.clear]: color === 'clear',
				})}
				{...rest}
				disabled={disabled}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
