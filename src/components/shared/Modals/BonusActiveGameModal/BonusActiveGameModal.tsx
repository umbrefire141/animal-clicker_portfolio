import coinsImg from '@/assets/images/coins.png';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './BonusActiveGameModal.module.css';

const BonusActiveGameModal = () => {
	return (
		<Modal position="bottom" className={styles.modal}>
			<img src={coinsImg} className={styles.img} />
			<Title className={styles.title}>Бонусы за активную игру</Title>
			<Text className={styles.text} color="gray">
				После 3 дней активной игры вы получите 1 $ на реальный счёт. Через 7
				дней активной игры — 2 $
			</Text>
			<Button>Играть</Button>
		</Modal>
	);
};

export default BonusActiveGameModal;
