import tether from '@/assets/images/tether.svg';
import icon3 from '@/assets/images/user-circle.svg';
import icon1 from '@/assets/images/wallet-add.svg';
import icon2 from '@/assets/images/wallet-arrow-down.svg';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';
import Text from '../../../components/ui/Text/Text';
import Title from '../../../components/ui/Title/Title';
import styles from './Wallet.module.css';

export default function WalletPage() {
	return (
		<div className={styles.wallet}>
			<div>
				<Title className={styles.title}>Кошелёк</Title>
				<div className={styles.balance}>
					<div className={styles.balance_block}>
						<div className={styles['balance_block-row']}>
							<div>
								<Text className={styles.balance_name}>USDT</Text>
								<div className={styles.balance_course}>200 $ ≈ 18 334 ₽</div>
							</div>
							<div className={styles.balance_icon}>
								<img src={tether} />
							</div>
						</div>
					</div>
					<div className={styles.sum}>
						<Title className={styles.sum_title}>200 $</Title>
						<Text color="gray">Ваш текущий баланс</Text>
					</div>
				</div>
				<Text className={styles['list-text']}>История операций:</Text>
				<div className={styles.column}>
					<div className={styles.operation}>
						<div className={styles.operation_row}>
							<div className={styles.operation_img}>
								<img src={icon1} />
							</div>
							<div>
								<div className={styles.info}>Пополнение</div>
								<div className={styles.date}>14:32, 24 мая 2024</div>
							</div>
						</div>
						<div className={styles.operation_sum}>+5 $</div>
					</div>
					<div className={styles.operation}>
						<div className={styles.operation_row}>
							<div className={styles.operation_img}>
								<img src={icon2} />
							</div>
							<div>
								<div className={styles.info}>Вывод</div>
								<div className={styles.date}>14:32, 24 мая 2024</div>
							</div>
						</div>
						<div className={styles.operation_sum}>+5 $</div>
					</div>
					<div className={styles.operation}>
						<div className={styles.operation_row}>
							<div className={styles.operation_img}>
								<img src={icon3} />
							</div>
							<div>
								<div className={styles.info}>Покупка скина “Bear Teacher”</div>
								<div className={styles.date}>14:32, 24 мая 2024</div>
							</div>
						</div>
						<div className={styles.operation_sum}>+5 $</div>
					</div>
				</div>
			</div>
			<div className={styles.btns}>
				<Link to="/withdraw" className={styles.btn}>
					<Button variant="outline">Вывод</Button>
				</Link>
				<Link to="/deposit" className={styles.btn}>
					<Button>Пополнить</Button>
				</Link>
			</div>
		</div>
	);
}
