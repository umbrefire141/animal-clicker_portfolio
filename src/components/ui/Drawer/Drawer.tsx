import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { useAppDispatch } from '../../../hooks/useSelector';
import { closeAllDrawers } from '../../../store/drawer/drawer.slice';
import Sheet from '../Sheet/Sheet';
import { IDrawerComponent } from './Drawer.interface';
import styles from './Drawer.module.css';

const Drawer = ({
	className,
	direction = 'column',
	color = 'dark',
	outsideIsClosed = true,
	closeButton = false,
	children,
}: IDrawerComponent) => {
	const dispatch = useAppDispatch();
	const ref = useRef<HTMLDivElement>(null);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={styles.drawer}
				onClick={event => {
					const { target } = event;

					if (
						target instanceof Node &&
						!ref.current?.contains(target) &&
						outsideIsClosed
					) {
						dispatch(closeAllDrawers());
					}
				}}
			>
				<div className={styles.wrapper} ref={ref}>
					<Sheet
						color={color}
						direction={direction}
						className={clsx(className, styles.box)}
					>
						<div className={styles.content}>{children}</div>
						{closeButton && (
							<button
								className={styles.closeBtn}
								onClick={() => dispatch(closeAllDrawers())}
							>
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM19.2 17.875C19.5625 18.2375 19.5625 18.8375 19.2 19.2C19.0125 19.3875 18.775 19.475 18.5375 19.475C18.3 19.475 18.0625 19.3875 17.875 19.2L15 16.325L12.125 19.2C11.9375 19.3875 11.7 19.475 11.4625 19.475C11.225 19.475 10.9875 19.3875 10.8 19.2C10.4375 18.8375 10.4375 18.2375 10.8 17.875L13.675 15L10.8 12.125C10.4375 11.7625 10.4375 11.1625 10.8 10.8C11.1625 10.4375 11.7625 10.4375 12.125 10.8L15 13.675L17.875 10.8C18.2375 10.4375 18.8375 10.4375 19.2 10.8C19.5625 11.1625 19.5625 11.7625 19.2 12.125L16.325 15L19.2 17.875Z"
										fill="#BCBDC8"
									/>
								</svg>
							</button>
						)}
					</Sheet>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Drawer;
