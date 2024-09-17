import img from '@/assets/images/rocket-turbo.png';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './TurboModal.module.css';

const TurboModal = () => {
	return (
		<Modal className={styles.modal} position="bottom">
			<img src={img} className={styles.img} />
			<Title className={styles.title}>Turbo</Title>
			<Text className={styles.text} color="gray">
				Значительно увеличивает скорость сбора монет, позволяя быстрее
				накапливать их за короткое время
			</Text>
			<Button>Получить бесплатно</Button>
		</Modal>
	);
};

export default TurboModal;
