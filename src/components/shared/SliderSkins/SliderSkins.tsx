import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ArrowIcon from '../../icons/ArrowIcon/ArrowIcon';
import { ISliderComponent } from './SliderSkins.interface';
import styles from './SliderSkins.module.css';

const variants = {
	initial: (direction: number) => ({
		x: direction > 0 ? 200 : -200,
		opacity: 0,
	}),

	animate: {
		x: 0,
		zIndex: 1,
		opacity: 1,
	},

	exit: (direction: number) => ({
		x: direction > 0 ? -200 : 200,
		zIndex: 0,
		opacity: 0,
	}),
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const SliderSkins = ({ images, setIndex, index }: ISliderComponent) => {
	const [direction, setDirection] = useState(0);

	const nextPage = () => {
		setDirection(1);
		if (index === images.length - 1) {
			setIndex(0);
			return;
		}

		setIndex(a => a + 1);
	};

	const prevPage = () => {
		setDirection(-1);
		if (index === 0) {
			setIndex(images.length - 1);
			return;
		}

		setIndex(a => a - 1);
	};

	return (
		<div className={styles.slider}>
			<button className={styles.btn} onClick={() => prevPage()}>
				<ArrowIcon className={styles.btn_icon} direction="left" />
			</button>
			<div className={styles.wrapper}>
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						variants={variants}
						animate="animate"
						initial="initial"
						exit="exit"
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(_, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								nextPage();
							} else if (swipe > swipeConfidenceThreshold) {
								prevPage();
							}
						}}
						src={images[index]}
						key={images[index]}
						custom={direction}
						className={styles.img}
					/>
				</AnimatePresence>
			</div>
			<button className={styles.btn} onClick={() => nextPage()}>
				<ArrowIcon className={styles.btn_icon} />
			</button>
		</div>
	);
};

export default SliderSkins;
