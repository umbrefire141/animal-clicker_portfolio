import model from '@/assets/images/animals/bear/model_character_1.svg';
import dollar from '@/assets/images/dollar.png';
import virtualCoins from '@/assets/images/virtual_coins.png';
import Avatar from '../../ui/Avatar/Avatar';
import Text from '../../ui/Text/Text';
import Title from '../../ui/Title/Title';
import styles from './User.module.css';

const User = () => {
	return (
		<div className={styles.user}>
			<div className={styles.row}>
				<div className={styles.info}>
					<Avatar img={model} />
					<Text>username</Text>
				</div>
				<Title className={styles.number}>1</Title>
			</div>
			<div className={styles.coin}>
				<img src={virtualCoins} />
				<div className={styles.coin_text}>монет: 5000</div>
			</div>
			<div className={styles.coin}>
				<img src={dollar} />
				<div className={styles.coin_text}>всего заработано: 100 $</div>
			</div>
			<div className={styles.coin}>
				<img src={dollar} />
				<div className={styles.coin_text}>заработок в день: 4$</div>
			</div>
		</div>
	);
};

export default User;
