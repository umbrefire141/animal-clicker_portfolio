import img1 from '@/assets/images/quests/img-4.png';
import coinsimg from '@/assets/images/virtual_coins.png';
import clsx from 'clsx';
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
import styles from './DailyRewardModal.module.css';

const DailyRewardModal = () => {
	const dispatch = useAppDispatch();

	const getMoney = () => {
		dispatch(startAnimations({ coins: 'dollar' }));

		setTimeout(() => {
			dispatch(endAnimations());
			dispatch(closeAllModals());
		}, 2000);
	};

	return (
		<Modal position="bottom" className={styles.modal}>
			<img src={img1} className={styles.main_img} />
			<Title className={styles.title}>Ваша ежедневная награда</Title>
			<Text className={styles.text} color="gray">
				Получайте монеты за ежедневный вход в игру без пропусков. Необходимо
				нажимать кнопку «Забрать» каждый день, иначе счётчик дней начнёт отсчёт
				заново
			</Text>
			<div className={styles.grid}>
				<div className={clsx(styles.current)}>
					<div className={styles.item}>
						<div className={styles.day}>День 1</div>
						<img src={coinsimg} alt="" className={styles.img} />
						<div className={styles.status}>500</div>
					</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 2</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>1K</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 3</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>2,5К</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 4</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>5К</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 5</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>15К</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 6</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>25К</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 7</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>100К</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 8</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>500К</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 9</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>750К</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 10</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>1M</div>
				</div>
			</div>
			<Button onClick={getMoney}>Забрать</Button>
		</Modal>
	);
};

export default DailyRewardModal;
