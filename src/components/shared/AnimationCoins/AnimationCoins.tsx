import dollarImg from '@/assets/images/dollar.png';
import virtualImg from '@/assets/images/virtual_coins.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { randomIntFromInterval } from '../../../utils/randomIntFromInterval';
import styles from './AnimationCoins.module.css';
import { IAnimationsCoins } from './AnimationsCoins.interface';

const AnimationCoins = ({ coins = 'dollar' }: IAnimationsCoins) => {
	const [animations, setAnimations] = useState<{ y: number; x: number }[]>([]);

	useEffect(() => {
		if (animations.length < 20) {
			const time = setInterval(() => {
				setAnimations(prev => [
					...prev,
					{
						y: -randomIntFromInterval(1, 100),
						x: -50,
					},
					{
						y: -randomIntFromInterval(1, 100),
						x: randomIntFromInterval(1, 50),
					},
					{
						y: -randomIntFromInterval(1, 100),
						x: 100,
					},
					{
						y: -randomIntFromInterval(1, 100),
						x: 200,
					},
					{
						y: -randomIntFromInterval(1, 100),
						x: 250,
					},
					{
						y: -randomIntFromInterval(1, 100),
						x: 300,
					},
					{
						y: -randomIntFromInterval(1, 100),
						x: 500,
					},
					{
						y: -randomIntFromInterval(1, 100),
						x: 700,
					},
				]);
			}, 100);

			return () => {
				clearInterval(time);
			};
		}
	}, [animations]);

	return (
		<>
			{createPortal(
				<AnimatePresence>
					{animations.map((a, i) => (
						<motion.div
							key={i}
							initial={{
								y: a.y,
								x: a.x,
								maxWidth: 42,
								height: 42,
								opacity: 1,
							}}
							animate={{
								y: -1000,
								x: 200,
								maxWidth: 24,
								height: 24,
								opacity: 0,
							}}
							transition={{
								type: 'spring',
								duration: 2,
								damping: 50,
							}}
							className={styles.img}
						>
							<img src={coins === 'virtual' ? virtualImg : dollarImg} alt="" />
						</motion.div>
					))}
				</AnimatePresence>,
				document.body
			)}
		</>
	);
};

export default AnimationCoins;
