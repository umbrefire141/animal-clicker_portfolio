import coins from '@/assets/images/dollar.png';
import { useAppDispatch } from '../../../../hooks/useSelector';
import { openModal } from '../../../../store/modal/modal.slice';
import Button from '../../../ui/Button/Button';
import Text from '../../../ui/Text/Text';
import { IImprovement } from './Improvement.interface';
import styles from './Improvement.module.css';

const Improvement = ({
	img,
	title,
	description,
	cost,
	profit,
}: IImprovement) => {
	const dispatch = useAppDispatch();

	const buyImprovement = () => {
		dispatch(
			openModal({
				nameModal: 'skin',
				data: {
					img,
					title,
					description,
					profit,
					cost,
				},
			})
		);
	};

	return (
		<div className={styles.improvement}>
			<div className={styles.row}>
				<div className={styles.item}>
					<img src={img} className={styles.img} />
					<Text className={styles.text}>{title}</Text>
				</div>
				<Button onClick={() => buyImprovement()}>Купить {cost} $</Button>
			</div>
			<div className={styles.profit}>
				<img src={coins} className={styles.profit_img} />
				<Text className={styles.profit_text}>
					+{profit}% <span>дохода в день</span>
				</Text>
			</div>
		</div>
	);
};

export default Improvement;
