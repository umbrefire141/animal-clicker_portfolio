import avatarImg from '@/assets/images/avatar.png';
import clsx from 'clsx';
import { IAvatarComponent } from './Avatar.interface';
import styles from './Avatar.module.css';

const Avatar = ({ className }: IAvatarComponent) => {
	return (
		<div className={clsx(className, styles.avatar)}>
			<img src={avatarImg} alt="" />
		</div>
	);
};

export default Avatar;
