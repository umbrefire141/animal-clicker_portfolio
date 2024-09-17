import img from '@/assets/images/energy-full.png';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './EnergyModal.module.css';

const EnergyModal = () => {
	return (
		<Modal className={styles.modal} position="bottom">
			<img src={img} className={styles.img} />
			<Title className={styles.title}>Full energy</Title>
			<Text className={styles.text} color="gray">
				Помогает быстро восстановить всю энергию, позволяя вам дольше тапать
				монеты без перерывов
			</Text>
			<Button>Получить бесплатно</Button>
		</Modal>
	);
};

export default EnergyModal;
