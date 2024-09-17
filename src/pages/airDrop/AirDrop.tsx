import ArrowIcon from '../../components/icons/ArrowIcon/ArrowIcon';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import { useAppDispatch } from '../../hooks/useSelector';
import { openModal } from '../../store/modal/modal.slice';
import styles from './AirDrop.module.css';

const AirDrop = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.airdrop}>
			<Title className={styles.title}>AirDrop tasks</Title>

			<Text className={styles.text} color="gray">
				Листинг уже отправлен. Задания будут отображены ниже. Выполните их,
				чтобы принять участие в AirDrop
			</Text>
			<Text className={styles['list-text']}>Список заданий</Text>
			<button
				className={styles.btn}
				onClick={() => dispatch(openModal({ nameModal: 'connectTonWallet' }))}
			>
				<Sheet className={styles.wrapper}>
					<Text>Подключить свой кошелёк (скоро) </Text>
					<ArrowIcon />
				</Sheet>
			</button>
		</div>
	);
};

export default AirDrop;
