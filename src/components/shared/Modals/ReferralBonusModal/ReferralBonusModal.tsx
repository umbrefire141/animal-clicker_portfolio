import coinsImg from '@/assets/images/referral-coins.png';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './ReferralBonusModal.module.css';

const ReferralBonusModal = () => {
	return (
		<Modal position="bottom" className={styles.modal}>
			<img src={coinsImg} className={styles.img} />
			<Title className={styles.title}>10% от депозита реферала</Title>
			<Text className={styles.text} color="gray">
				Вы получаете 5 $ (10% от суммы депозита приглашенного вами реферала)
			</Text>
			<Button>Забрать 5 $</Button>
		</Modal>
	);
};

export default ReferralBonusModal;
