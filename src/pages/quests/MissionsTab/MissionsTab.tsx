import img4 from '@/assets/images/quests/img-4.png';
import img5 from '@/assets/images/quests/img-5.png';
import clsx from 'clsx';
import ArrowIcon from '../../../components/icons/ArrowIcon/ArrowIcon';
import Coins from '../../../components/shared/Coins/Coins';
import Sheet from '../../../components/ui/Sheet/Sheet';
import Text from '../../../components/ui/Text/Text';
import { useAppDispatch } from '../../../hooks/useSelector';
import { openModal } from '../../../store/modal/modal.slice';
import styles from './MissionsTab.module.css';

const MissionsTab = () => {
	const dispatch = useAppDispatch();

	return (
		<div>
			<div className={styles.column}>
				<div
					className={styles.gold_wrapper}
					onClick={() => dispatch(openModal({ nameModal: 'dailyReward' }))}
				>
					<Sheet className={clsx(styles.item, styles.gold)}>
						<div className={styles.item_row}>
							<img src={img4} alt="" className={styles.item_img} />
							<div>
								<Text className={styles.item_text}>Ежедневная награда</Text>
								<Coins count="+1M" />
							</div>
						</div>
						<ArrowIcon />
					</Sheet>
				</div>
				<div onClick={() => dispatch(openModal({ nameModal: 'activeGame' }))}>
					<Sheet className={styles.item}>
						<div className={styles.item_row}>
							<img src={img5} alt="" className={styles.item_img} />
							<div>
								<Text className={styles.item_text}>
									Награда за активную игру
								</Text>
								<Coins count="+1 $" />
							</div>
						</div>
						<ArrowIcon />
					</Sheet>
				</div>
			</div>
		</div>
	);
};

export default MissionsTab;
