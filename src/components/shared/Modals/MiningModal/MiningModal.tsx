import coinsImg from '@/assets/images/virtual-coins.png';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './MiningModal.module.css';

const MiningModal = () => {
	return (
		<Modal position="bottom" className={styles.modal}>
			<img src={coinsImg} className={styles.img} />
			<Title className={styles.title}>Увеличьте вашу прибыль</Title>
			<Text className={styles.text} color="gray">
				Перейдите в меню улучшений, чтобы увеличить прибыль в час
			</Text>
			<Button>Начать</Button>
		</Modal>
	);
};

export default MiningModal;
