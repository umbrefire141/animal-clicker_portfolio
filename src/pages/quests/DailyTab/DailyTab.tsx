import img1 from '@/assets/images/quests/img-1.png';
import img2 from '@/assets/images/quests/img-2.png';
import img3 from '@/assets/images/quests/img-3.png';
import ArrowIcon from '../../../components/icons/ArrowIcon/ArrowIcon';
import Coins from '../../../components/shared/Coins/Coins';
import Sheet from '../../../components/ui/Sheet/Sheet';
import Text from '../../../components/ui/Text/Text';
import { useAppDispatch } from '../../../hooks/useSelector';
import { openModal } from '../../../store/modal/modal.slice';
import styles from './DailyTab.module.css';

const DailyTab = () => {
	const dispatch = useAppDispatch();

	return (
		<div>
			<div className={styles.column}>
				<button
					className={styles.btn}
					onClick={() => dispatch(openModal({ nameModal: 'watchDailyNews' }))}
				>
					<Sheet className={styles.item}>
						<div className={styles.item_row}>
							<img src={img1} alt="" className={styles.item_img} />
							<div>
								<Text className={styles.item_text}>Ежедневные новости</Text>
								<Coins count="+25 000" />
								<Text className={styles.item_info}>+10 опыта к 1 уровню</Text>
							</div>
						</div>
						<ArrowIcon />
					</Sheet>
				</button>
				<button
					className={styles.btn}
					onClick={() => dispatch(openModal({ nameModal: 'joinTelegram' }))}
				>
					<Sheet className={styles.item}>
						<div className={styles.item_row}>
							<img src={img2} alt="" className={styles.item_img} />
							<div>
								<Text className={styles.item_text}>
									Подписывайся на наш Telegram
								</Text>
								<Coins count="+25 000" />
								<Text className={styles.item_info}>+10 опыта к 1 уровню</Text>
							</div>
						</div>
						<ArrowIcon />
					</Sheet>
				</button>
				<button
					className={styles.btn}
					onClick={() => dispatch(openModal({ nameModal: 'inviteFriends' }))}
				>
					<Sheet className={styles.item}>
						<div className={styles.item_row}>
							<img src={img3} alt="" className={styles.item_img} />
							<div>
								<Text className={styles.item_text}>Пригласите 4 друзей</Text>
								<Coins count="+25 000" />
								<Text className={styles.item_info}>+10 опыта к 1 уровню</Text>
							</div>
						</div>
						<ArrowIcon />
					</Sheet>
				</button>
			</div>
		</div>
	);
};

export default DailyTab;
