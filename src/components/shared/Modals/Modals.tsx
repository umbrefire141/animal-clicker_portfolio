import img1 from '@/assets/images/quests/img-1.png';
import img2 from '@/assets/images/quests/img-2.png';
import img3 from '@/assets/images/quests/img-3.png';
import { useAppSelector } from '../../../hooks/useDispatch';
import { RootState } from '../../../store';
import ActiveGameModal from './ActiveGameModal/ActiveGameModal';
import BonusActiveGameModal from './BonusActiveGameModal/BonusActiveGameModal';
import ConnectedTonWalletModal from './ConnectedTonWalletModal/ConnectedTonWalletModal';
import ConnectTonWalletDrawer from './ConnectTonWalletModal/ConnectTonWalletModal';
import DailyRewardModal from './DailyRewardModal/DailyRewardModal';
import EnergyModal from './EnergyModal/EnergyModal';
import GetMoneyModal from './GetMoneyModal/GetMoneyModal';
import ImprovementModal from './ImprovementModal/ImprovementModal';
import IncomeUSDTModal from './IncomeUSDTModal/IncomeUSDTModal';
import InvitedFriendModal from './InvitedFriendModal/InvitedFriendModal';
import MiningModal from './MiningModal/MiningModal';
import ReferralBonusModal from './ReferralBonusModal/ReferralBonusModal';
import SkinModal from './SkinModal/SkinModal';
import TasksModal from './TasksModal/TasksModal';
import TurboModal from './TurboModal/TurboModal';

const Modals = () => {
	const { nameModal, data } = useAppSelector((state: RootState) => state.modal);

	return (
		<>
			{nameModal === 'invitedFriend' && <InvitedFriendModal />}
			{nameModal === 'dailyReward' && <DailyRewardModal />}
			{nameModal === 'activeGame' && <ActiveGameModal />}
			{nameModal === 'getMoney' && <GetMoneyModal />}
			{nameModal === 'incomeUSDT' && <IncomeUSDTModal />}
			{nameModal === 'mining' && <MiningModal />}
			{nameModal === 'bonusActiveGame' && <BonusActiveGameModal />}
			{nameModal === 'energy' && <EnergyModal />}
			{nameModal === 'turbo' && <TurboModal />}
			{nameModal === 'referralBonus' && <ReferralBonusModal />}
			{nameModal === 'connectTonWallet' && <ConnectTonWalletDrawer />}
			{nameModal === 'connectedTonWallet' && <ConnectedTonWalletModal />}
			{nameModal === 'improvement' && <ImprovementModal {...data} />}
			{nameModal === 'skin' && <SkinModal {...data} />}
			{nameModal === 'watchDailyNews' && (
				<TasksModal
					img={img1}
					title="Просмотрите ежедневные новости"
					description="Просматривайте ежедневные новости на YouTube и публикуйте краткое описание ключевых событий"
					buttonText="Перейти"
				/>
			)}
			{nameModal === 'joinTelegram' && (
				<TasksModal
					img={img2}
					title="Присоединяйтесь к нашему Telegram каналу"
					description="Подписывайтесь на наш Telegram и получайте +10 опыта к 1 уровню и 25 000 Beast Coin"
					buttonText="Присоединиться"
				/>
			)}
			{nameModal === 'inviteFriends' && (
				<TasksModal
					img={img3}
					title="Пригласите 4 друзей"
					description="Пригласите четверых друзей для совместного участия"
					buttonText="Пригласить"
				/>
			)}
		</>
	);
};

export default Modals;
