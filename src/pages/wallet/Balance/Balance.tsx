import Text from '../../../components/ui/Text/Text';
import Title from '../../../components/ui/Title/Title';
import { IBalance } from './Balance.interface';
import styles from './Balance.module.css';

const Balance = ({ title, sum }: IBalance) => {
	return (
		<>
			<Title className={styles.title}>{title}</Title>
			<div className={styles.balance}>
				<Text className={styles.balance_info} color="gray">
					Ваш текущий баланс
				</Text>
				<Title className={styles.balance_sum}>{sum} $</Title>
			</div>
		</>
	);
};

export default Balance;
