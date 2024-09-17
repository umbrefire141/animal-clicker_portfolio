import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';
import Field from '../../../components/ui/Field/Field';
import Title from '../../../components/ui/Title/Title';
import { useAppDispatch } from '../../../hooks/useSelector';
import { openModal } from '../../../store/modal/modal.slice';
import styles from './Deposit.module.css';

export default function DepositPage() {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.deposit}>
			<div>
				<Title className={styles.title}>Пополнение баланса кошелька</Title>
				<Field type="text" placeholder="Введите сумму депозита (usdt)" />
			</div>
			<div className={styles.navbar}>
				<div className={styles.btns}>
					<Link to="/withdraw" className={styles.btn}>
						<Button variant="outline">Вывод</Button>
					</Link>
					<button
						className={styles.btn}
						onClick={() =>
							dispatch(openModal({ nameModal: 'connectTonWallet' }))
						}
					>
						<Button>Пополнить</Button>
					</button>
				</div>
				<div className={styles.info_text}>
					Все инвестиции сопряжены с риском. Вкладывайте только те средства,
					которые вы готовы потерять
				</div>
			</div>
		</div>
	);
}
