import bgGlow from '@/assets/images/glow-bg.png';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import AnimationCoins from '../components/shared/AnimationCoins/AnimationCoins';
import Drawers from '../components/shared/Drawers/Drawers';
import Modals from '../components/shared/Modals/Modals';
import Navbar from '../components/shared/Navbar/Navbar';
import { useAppSelector } from '../hooks/useDispatch';
import { RootState } from '../store';
import styles from './Layout.module.css';

const Layout = () => {
	const { started, coins } = useAppSelector(
		(state: RootState) => state.animations
	);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, height: '100%', y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0 }}
				className={styles.layout}
			>
				<div className={styles.wrapper}>
					<Outlet />
					<Modals />
					<Drawers />
				</div>
				<Navbar />
				{started && <AnimationCoins coins={coins} />}
			</motion.div>
			<img src={bgGlow} className={styles.bg} />
		</>
	);
};

export default Layout;
