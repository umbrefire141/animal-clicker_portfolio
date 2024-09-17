import img1 from '@/assets/images/coins.png';
import { useAppDispatch } from '../../../../hooks/useSelector';
import {
	endAnimations,
	startAnimations,
} from '../../../../store/animations/animations.slice';
import { closeAllModals } from '../../../../store/modal/modal.slice';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import styles from './GetMoneyModal.module.css';

const GetMoneyModal = () => {
	const dispatch = useAppDispatch();

	const getMoney = () => {
		dispatch(startAnimations({ coins: 'dollar' }));

		setTimeout(() => {
			dispatch(endAnimations());
			dispatch(closeAllModals());
		}, 2000);
	};

	return (
		<Modal className={styles.modal}>
			<img src={img1} className={styles.main_img} />
			<Text className={styles.text}>
				Вы можете забрать 1$, после чего отсчет дней начнется заново. Или можете
				подождать и забрать 3$.
			</Text>
			<Button>Играть дальше</Button>
			<Button variant="outline" className={styles.get} onClick={getMoney}>
				Забрать $1
			</Button>
		</Modal>
	);
};

export default GetMoneyModal;
