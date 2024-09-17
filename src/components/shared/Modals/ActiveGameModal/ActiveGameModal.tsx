import closeIcon from '@/assets/images/close.svg';
import dollarImg from '@/assets/images/dollar.png';
import markedIcon from '@/assets/images/marked.svg';
import img1 from '@/assets/images/quests/img-5.png';
import clsx from 'clsx';
import { useAppDispatch } from '../../../../hooks/useSelector';
import { openModal } from '../../../../store/modal/modal.slice';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './ActiveGameModal.module.css';

const ActiveGameModal = () => {
	const dispatch = useAppDispatch();

	const getMoney = () => {
		dispatch(openModal({ nameModal: 'getMoney' }));
	};

	return (
		<Modal position="bottom" className={styles.modal}>
			<img src={img1} className={styles.main_img} />
			<Title className={styles.title}>Награда за активную игру</Title>
			<Text className={styles.text} color="gray">
				После 3 дней активной игры вы получите $1 на реальный счет. Через 7 дней
				активной игры — $3.
			</Text>
			<div className={styles.grid}>
				<div className={clsx(styles.current)}>
					<div className={styles.item}>
						<div className={styles.day}>День 1</div>
						<img src={markedIcon} alt="" className={styles.img} />
						<div className={styles.status}>$0</div>
					</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 2</div>
					<img src={closeIcon} alt="" className={styles.img} />
					<div className={styles.status}>$0</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 3</div>
					<img src={dollarImg} alt="" className={styles.img} />
					<div className={styles.status}>$1</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 4</div>
					<img src={closeIcon} alt="" className={styles.img} />
					<div className={styles.status}>$0</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 5</div>
					<img src={closeIcon} alt="" className={styles.img} />
					<div className={styles.status}>$0</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 6</div>
					<img src={closeIcon} alt="" className={styles.img} />
					<div className={styles.status}>$0</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 7</div>
					<img src={dollarImg} alt="" className={styles.img} />
					<div className={styles.status}>$3</div>
				</div>
			</div>
			<Button onClick={getMoney}>Забрать</Button>
		</Modal>
	);
};

export default ActiveGameModal;
