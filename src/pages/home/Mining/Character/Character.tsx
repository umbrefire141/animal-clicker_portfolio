import animalCharacter from '@/assets/images/animals/bear/model_character_1.svg';
import bgImg from '@/assets/images/bg-home.png';
import clsx from 'clsx';
import { useState } from 'react';
import { ICharacter } from './Character.interface';
import styles from './Character.module.css';
import Tapping from './Tapping/Tapping';

const Character = ({ setPoints }: ICharacter) => {
	const [clicked, setClicked] = useState(false);
	const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
		[]
	);
	const pointsToAdd = 2;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const tappingHandler = (event: any) => {
		const clientX = event.targetTouches[0].clientX;
		const clientY = event.targetTouches[0].clientY;

		setPoints(points => points + pointsToAdd);
		setClicks(prev => [...prev, { id: Date.now(), x: clientX, y: clientY }]);

		setClicked(prev => !prev);
		setTimeout(() => setClicked(false), 100);
	};

	const handleAnimationEnd = (id: number) => {
		setClicks(prev => prev.filter(click => click.id !== id));
	};

	return (
		<>
			<div className={styles.click} onTouchStart={tappingHandler}>
				<img src={animalCharacter} alt="" className={styles.click_character} />
			</div>
			<img
				src={bgImg}
				alt=""
				className={clsx(styles.click_bg, {
					[styles.bg_active]: clicked === true,
				})}
			/>
			{clicks.map(click => (
				<Tapping
					clientX={click.x}
					clientY={click.y}
					pointsToAdd={pointsToAdd}
					key={click.id}
					onAnimationEnd={() => handleAnimationEnd(click.id)}
				/>
			))}
		</>
	);
};

export default Character;
