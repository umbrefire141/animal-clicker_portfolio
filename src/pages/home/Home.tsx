import coinIcon from '@/assets/icons/coin-icon.svg';
import bgGlow from '@/assets/images/glow-bg.png';
import virtualCoinIcon from '@/assets/images/virtual_coins.png';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Drawers from '../../components/shared/Drawers/Drawers';
import Modals from '../../components/shared/Modals/Modals';
import Navbar from '../../components/shared/Navbar/Navbar';
import Profile from '../../components/shared/Profile/Profile';
import { useAppSelector } from '../../hooks/useDispatch';
import { useAppDispatch } from '../../hooks/useSelector';
import { RootState } from '../../store';
import { openModal } from '../../store/modal/modal.slice';
import styles from './Home.module.css';
import Mining from './Mining/Mining';

export default function HomePage() {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user?.isInstructioned) navigate('/instructions');
	}, [user]);

	return (
		<>
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0, height: '100%', y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					className={styles.home}
				>
					<div className={styles.container}>
						<Profile />

						<div className={styles.income}>
							<img src={coinIcon} className={styles.income__img} />
							<div className={styles.income__text}>Реф. Доход +500</div>
						</div>
						<div className={styles.row}>
							<div className={styles.block}>
								<div className={styles.block__text}>Майнинг в час</div>
								<div className={styles.coin}>
									<img src={virtualCoinIcon} className={styles.coin_img} />
									<div className={styles.coin_text}>5000</div>
									<button
										className={styles.coin_questions}
										onClick={() => dispatch(openModal({ nameModal: 'mining' }))}
									>
										?
									</button>
								</div>
							</div>
							<div className={styles.block}>
								<div className={styles.block__text}>Майнинг в час</div>
								<div className={clsx(styles.coin_two, styles.coin)}>
									<img src={coinIcon} className={styles.coin_img} />
									<div className={styles.coin_text}>100$</div>
									<button
										className={styles.coin_questions}
										onClick={() =>
											dispatch(openModal({ nameModal: 'incomeUSDT' }))
										}
									>
										?
									</button>
								</div>
								<div className={styles.block__text}>+5 в день</div>
							</div>
						</div>
					</div>
					<Mining />
					<Drawers />
					<Modals />
					<Navbar />
				</motion.div>
			</AnimatePresence>
			<img src={bgGlow} className={styles.bg} />
		</>
	);
}
