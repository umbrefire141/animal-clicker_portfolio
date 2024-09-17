import energyImg from '@/assets/images/energy-full.png';
import rocketImg from '@/assets/images/rocket-turbo.png';
import coin from '@/assets/images/virtual_coins.png';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import { useAppDispatch } from '../../hooks/useSelector';
import { openModal } from '../../store/modal/modal.slice';
import styles from './Boost.module.css';

export default function BoostPage() {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.boost}>
			<Title className={styles.title}>Ускорить</Title>
			<div className={styles.balance}>
				<Text className={styles.balance_text} color="gray">
					Твой баланс
				</Text>
				<div className={styles.balance_row}>
					<img src={coin} className={styles.balance_img} />
					<Title className={styles.balance_text}>10,000</Title>
				</div>
			</div>
			<Text className={styles['list-text']}>
				Бесплатные ежедневные усилители
			</Text>
			<button
				className={styles.btn}
				onClick={() => dispatch(openModal({ nameModal: 'energy' }))}
			>
				<Sheet className={styles.block}>
					<img src={energyImg} alt="" className={styles.block_img} />
					<div>
						<Text className={styles.block_title}>Full energy</Text>
						<Text className={styles.block_info} color="gray">
							6/6 доступно
						</Text>
					</div>
				</Sheet>
			</button>
			<button
				className={styles.btn}
				onClick={() => dispatch(openModal({ nameModal: 'turbo' }))}
			>
				<Sheet className={styles.block}>
					<img src={rocketImg} alt="" className={styles.block_img} />
					<div>
						<Text className={styles.block_title}>Turbo</Text>
					</div>
				</Sheet>
			</button>
		</div>
	);
}
