import gift1 from '@/assets/images/gifts/img-1.png';
import gift2 from '@/assets/images/gifts/img-2.png';
import gift3 from '@/assets/images/gifts/img-3.png';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Coins from '../../components/shared/Coins/Coins';
import User from '../../components/shared/User/User';
import Button from '../../components/ui/Button/Button';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import { useAppDispatch } from '../../hooks/useSelector';
import { openModal } from '../../store/modal/modal.slice';
import styles from './Friends.module.css';

export default function FriendsPage() {
	const [showedActions, setShowedActions] = useState(false);

	const dispatch = useAppDispatch();

	const [isShowUsers, setIsShowUsers] = useState(false);

	useEffect(() => {
		if (!showedActions) {
			setTimeout(() => {
				setShowedActions(true);
			}, 500);
		}
	}, [showedActions]);

	return (
		<>
			<div className={styles.friends}>
				<div className="container">
					<Title className={styles.title}>Пригласите рефералов!</Title>
					<Text className={styles.text} color="gray">
						Вы и Ваш реферал получите бонусы
					</Text>
					<Sheet direction="column" className={styles.item}>
						<div className={styles.item_row}>
							<img src={gift3} alt="" className={styles.item_img} />
							<Text className={styles.item_text}>
								+10% от депозита и покупок реферала
							</Text>
						</div>
					</Sheet>
					<Sheet direction="column" className={styles.item}>
						<div className={styles.item_row}>
							<img src={gift1} alt="" className={styles.item_img} />
							<Text className={styles.item_text}>Пригласить реферала</Text>
						</div>
						<div className={styles.item_row}>
							<Coins count="+5 000" />
							<div className={styles.item_info}>для вас и вашего реферала</div>
						</div>
					</Sheet>
					<Sheet direction="column" className={styles.item}>
						<div className={styles.item_row}>
							<img src={gift2} alt="" className={styles.item_img} />
							<Text className={styles.item_text}>
								Пригласить реферала с Telegram Premium
							</Text>
						</div>
						<div className={styles.item_row}>
							<Coins count="+25 000" />
							<div className={styles.item_info}>для вас и вашего реферала</div>
						</div>
					</Sheet>
					<Text className={styles['text-list']}>Список ваших друзей</Text>
					<div className={styles.users}>
						{!isShowUsers ? (
							<div onClick={() => setIsShowUsers(true)}>
								<Sheet className={styles.notFound}>
									Вы ещё никого не пригласили
								</Sheet>
							</div>
						) : (
							<>
								<User />
								<User />
								<User />
							</>
						)}
					</div>
				</div>
			</div>
			{showedActions &&
				createPortal(
					<motion.div
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						className={styles.actions}
					>
						<Button
							className={styles.actions_invite}
							onClick={() => dispatch(openModal('invitedFriend'))}
						>
							Пригласить реферала{' '}
						</Button>
						<Button className={styles.actions_btnLink}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Button>
					</motion.div>,
					document.getElementById('navbar')
				)}
		</>
	);
}
