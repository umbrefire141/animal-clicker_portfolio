import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { useAppDispatch } from '../../../hooks/useSelector';
import { closeAllModals } from '../../../store/modal/modal.slice';
import { IModalComponent } from './Modal.interface';
import styles from './Modal.module.css';

const Modal = ({
	className,
	position = 'center',
	children,
}: IModalComponent) => {
	const dispatch = useAppDispatch();
	const rootRef = useRef<HTMLDivElement>(null);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 0, opacity: 0 }}
				className={clsx(className, styles.modal, {
					[styles.center]: position === 'center',
					[styles.top]: position === 'top',
					[styles.bottom]: position === 'bottom',
				})}
				onClick={event => {
					const { target } = event;

					if (target instanceof Node && !rootRef.current?.contains(target)) {
						dispatch(closeAllModals());
					}
				}}
			>
				<div className={styles.box} ref={rootRef}>
					<div className={styles.content}>{children}</div>
					<button
						className={styles.close}
						onClick={() => dispatch(closeAllModals())}
					>
						<svg
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.5 0C4.99 0 0.5 4.49 0.5 10C0.5 15.51 4.99 20 10.5 20C16.01 20 20.5 15.51 20.5 10C20.5 4.49 16.01 0 10.5 0ZM13.86 12.3C14.15 12.59 14.15 13.07 13.86 13.36C13.71 13.51 13.52 13.58 13.33 13.58C13.14 13.58 12.95 13.51 12.8 13.36L10.5 11.06L8.2 13.36C8.05 13.51 7.86 13.58 7.67 13.58C7.48 13.58 7.29 13.51 7.14 13.36C6.85 13.07 6.85 12.59 7.14 12.3L9.44 10L7.14 7.7C6.85 7.41 6.85 6.93 7.14 6.64C7.43 6.35 7.91 6.35 8.2 6.64L10.5 8.94L12.8 6.64C13.09 6.35 13.57 6.35 13.86 6.64C14.15 6.93 14.15 7.41 13.86 7.7L11.56 10L13.86 12.3Z"
								fill="white"
								fillOpacity="0.06"
							/>
						</svg>
					</button>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Modal;
