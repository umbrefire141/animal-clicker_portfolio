import coins from '@/assets/images/dollar.png';
import { useAppDispatch } from '../../../../hooks/useSelector';
import {
	endAnimations,
	startAnimations,
} from '../../../../store/animations/animations.slice';
import { closeAllModals } from '../../../../store/modal/modal.slice';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import { ISkinModal } from './SkinModal.interface';
import styles from './SkinModal.module.css';

const SkinModal = ({ img, title, description, profit, cost }: ISkinModal) => {
	const dispatch = useAppDispatch();

	const buyProduct = () => {
		dispatch(startAnimations({ coins: 'dollar' }));

		setTimeout(() => {
			dispatch(endAnimations());
			dispatch(closeAllModals());
		}, 2000);
	};

	return (
		<Modal className={styles.modal} position="bottom">
			<img src={img} className={styles.img} />
			<Title className={styles.tilte}>{title}</Title>
			<Text className={styles.description} color="gray">
				{description}
			</Text>
			<div className={styles.profit}>
				<img src={coins} className={styles.profit_img} />
				<Text className={styles.profit_info}>+{profit}</Text>
				<Text className={styles.profit_text} color="gray">
					Доход в час
				</Text>
			</div>
			<Button onClick={buyProduct}>Купить {cost}$</Button>
		</Modal>
	);
};

export default SkinModal;
