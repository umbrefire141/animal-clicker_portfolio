import { useNavigate } from 'react-router-dom';
import WalletIcon from '../../../components/icons/WalletIcon/WalletIcon';
import Button from '../../../components/ui/Button/Button';
import Field from '../../../components/ui/Field/Field';
import Text from '../../../components/ui/Text/Text';
import Balance from '../Balance/Balance';
import styles from './WithdrawMoney.module.css';

export default function WithdrawMoneyPage() {
	const navigate = useNavigate();

	return (
		<div>
			<Balance title="История вывода" sum={200} />
			<div className={styles.sum}>
				<Field
					type="text"
					placeholder="Введите сумму для вывода"
					className={styles.sum_input}
				/>
				<div className={styles.sum_row}>
					<div className={styles.small_text}>Комиссия за вывод: 18%</div>
					<div className={styles.small_text}>Сумма к получению: 164 $</div>
				</div>
			</div>
			<div className={styles.wallet}>
				<Text className={styles.wallet_text}>Ваш кошелёк (или подключить)</Text>
				<Field icon={<WalletIcon />} type="text" placeholder="Ваш кошелёк" />
			</div>
			<div className={styles.withdraw}>
				<button
					className={styles.withdraw_history}
					onClick={() => navigate('/history')}
				>
					История выводов
				</button>
				<Button className={styles.withdraw_btn}>Вывести</Button>
				<div className={styles.small_text}>
					Вывод средств может занять до 24 часов
				</div>
			</div>
		</div>
	);
}
