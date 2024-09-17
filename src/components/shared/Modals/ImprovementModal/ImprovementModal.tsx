import coins from '@/assets/images/virtual_coins.png';
import { useAppDispatch } from '../../../../hooks/useSelector';
import {
	endAnimations,
	startAnimations,
} from '../../../../store/animations/animations.slice';
import { closeAllModals } from '../../../../store/modal/modal.slice';
import { formatCash } from '../../../../utils/formatCash';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import { IIMprovementModal } from './ImprovementModal.interface';
import styles from './ImprovementModal.module.css';

const ImprovementModal = ({
	img,
	title,
	description,
	profit,
	cost,
}: IIMprovementModal) => {
	const dispatch = useAppDispatch();

	const buyProduct = () => {
		dispatch(startAnimations({ coins: 'virtual' }));

		setTimeout(() => {
			dispatch(endAnimations());
			dispatch(closeAllModals());
		}, 2000);
	};

	return (
		<>
			<Modal className={styles.modal} position="bottom">
				<img src={img} className={styles.img} />
				<Title className={styles.tilte}>{title}</Title>
				<Text className={styles.description} color="gray">
					{description}
				</Text>
				<div className={styles.row}>
					<Text className={styles.profit_text}>Прибыль в час</Text>
					<div className={styles.profit}>
						<img src={coins} className={styles.profit_img} />
						<Text className={styles.profit_info}>+{profit}</Text>
					</div>
				</div>
				<Button onClick={buyProduct}>Купить {formatCash(cost)}</Button>
			</Modal>
		</>
	);
};

export default ImprovementModal;
