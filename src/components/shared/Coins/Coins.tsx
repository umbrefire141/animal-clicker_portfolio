import coinIcon from '@/assets/images/virtual_coins.png';
import { ICoinsComponent } from './Coins.interface';
import styles from './Coins.module.css';

const Coins = ({ count }: ICoinsComponent) => {
	return (
		<div className={styles.coin}>
			<img src={coinIcon} alt="" className={styles.img} />
			<div className={styles.text}>{count}</div>
		</div>
	);
};

export default Coins;
