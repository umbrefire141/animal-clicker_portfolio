import { ITappingComponent } from './Tapping.interface';
import styles from './Tapping.module.css';

const Tapping = ({
	clientX,
	clientY,
	pointsToAdd,
	onAnimationEnd,
}: ITappingComponent) => {
	return (
		<div
			style={{
				top: `${clientY - 170}px`,
				left: `${clientX - 28}px`,
				opacity: 1,
			}}
			className={styles.tapping}
			onAnimationEnd={onAnimationEnd}
		>
			<div>+{pointsToAdd}</div>
		</div>
	);
};

export default Tapping;
