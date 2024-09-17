import { AnimatePresence, motion } from 'framer-motion';
import { IBar } from './Bar.interface';
import styles from './Bar.module.css';

const Bar = ({ percent }: IBar) => {
	return (
		<div className={styles.bar}>
			<div className={styles.bar_wrapper}>
				<div className={styles.box}>
					<AnimatePresence mode="sync">
						<motion.div
							initial={{ width: '0%' }}
							animate={{ width: `${percent}%` }}
							transition={{ duration: 5 }}
							className={styles.line}
						></motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default Bar;
