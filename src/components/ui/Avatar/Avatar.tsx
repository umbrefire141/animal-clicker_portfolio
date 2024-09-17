import bgImg from '@/assets/images/background-avatar.png';
import clsx from 'clsx';
import { IAvatar } from './Avatar.interface';
import styles from './Avatar.module.css';

const Avatar = ({ img, className }: IAvatar) => {
	return (
		<div className={clsx(className, styles.avatar)}>
			<img src={img} className={styles.img} />
			<img src={bgImg} className={styles.bgImg} />
		</div>
	);
};

export default Avatar;
