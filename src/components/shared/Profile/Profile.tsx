import model from '@/assets/images/animals/bear/model_character_1.svg';
import settingsIcon from '@/assets/images/settings.svg';
import walletIcon from '@/assets/images/wallet.svg';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useSelector';
import { openDrawer } from '../../../store/drawer/drawer.slice';
import Avatar from '../../ui/Avatar/Avatar';
import styles from './Profile.module.css';

const Profile = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.profile}>
			<button
				onClick={() => dispatch(openDrawer({ nameDrawer: 'changeSkin' }))}
				className={clsx(styles.btn, styles.firstItem)}
			>
				<div className={styles.avatar}>
					<Avatar img={model} />
					<div className={styles.name}>@username</div>
				</div>
			</button>
			<div className={styles.row}>
				<Link to="/leadership" className={styles.btn}>
					1lvl
				</Link>
				<Link to="/wallet" className={styles.btn}>
					<img src={walletIcon} />
				</Link>
				<Link to="/settings" className={styles.btn}>
					<img src={settingsIcon} />
				</Link>
			</div>
		</div>
	);
};

export default Profile;
