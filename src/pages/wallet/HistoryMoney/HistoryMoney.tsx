import Sheet from '../../../components/ui/Sheet/Sheet';
import Text from '../../../components/ui/Text/Text';
import Balance from '../Balance/Balance';
import styles from './HistoryMoney.module.css';

export default function HistoryMoneyPage() {
	return (
		<div>
			<Balance title="История выводов" sum={200} />
			<div className={styles.line}>
				<Text color="gray" className={styles.line_text}>
					Вчера
				</Text>
				<Sheet className={styles.item}>
					<Text>200 $</Text>
					<div>
						<Text color="purple">Выполнено</Text>
						<div className={styles.time}>18:30</div>
					</div>
				</Sheet>
			</div>
		</div>
	);
}
