import coinsImg from '@/assets/images/coins.png';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './IncomeUSDTModal.module.css';

const IncomeUSDTModal = () => {
	return (
		<Modal position="bottom" className={styles.modal}>
			<img src={coinsImg} className={styles.img} />
			<Title className={styles.title}>Получайте доход в USDT каждый день</Title>
			<Text className={styles.text} color="gray">
				Перейдите в меню скинов, выберите подходящего и получайте доход
				ежедневно
			</Text>
			<Button>Перейти</Button>
		</Modal>
	);
};

export default IncomeUSDTModal;
