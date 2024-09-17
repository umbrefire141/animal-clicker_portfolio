import Coins from '../../../components/shared/Coins/Coins';
import Button from '../../../components/ui/Button/Button';
import Sheet from '../../../components/ui/Sheet/Sheet';
import Text from '../../../components/ui/Text/Text';
import { useAppDispatch } from '../../../hooks/useSelector';
import { openModal } from '../../../store/modal/modal.slice';
import { formatCash } from '../../../utils/formatCash';
import { IProductComponent } from './Improvement.interface';
import styles from './Improvement.module.css';

const Improvement = ({
	img,
	title,
	description,
	information,
}: IProductComponent) => {
	const dispatch = useAppDispatch();

	const buyProduct = () => {
		dispatch(
			openModal({
				nameModal: 'improvement',
				data: {
					img,
					title,
					description,
					profit: information.profit,
					cost: information.cost,
				},
			})
		);
	};

	return (
		<Sheet direction="column" className={styles.item}>
			<div className={styles.item_row}>
				<div className={styles.item_name}>
					<img src={img} alt="" />
					<Text>{title}</Text>
				</div>
				<div>
					<Button onClick={buyProduct} disabled={false}>
						Купить {formatCash(information.cost)}
					</Button>
				</div>
			</div>
			<div className={styles.item_row}>
				<div className={styles.item_text}>
					Необходимый уровень: <span>{information.required_level}</span>
				</div>
				<Coins count={`+${information.profit}`} />
			</div>
		</Sheet>
	);
};

export default Improvement;
