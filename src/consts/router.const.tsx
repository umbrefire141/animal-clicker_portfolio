import { ReactNode } from 'react';
import AirDrop from '../pages/airDrop/AirDrop';
import BoostPage from '../pages/boost/Boost';
import FriendsPage from '../pages/friends/Friends';
import HomePage from '../pages/home/Home';
import ImprovesPage from '../pages/improves/Improves';
import InstructionsPage from '../pages/instructions/Instructions';
import LeadershipPage from '../pages/leadership/Leadership';
import QuestsPage from '../pages/quests/Quests';
import SettingsPage from '../pages/settings/Settings';
import ShopPage from '../pages/shop/Shop';
import TableLeadersPage from '../pages/table-leaders/TableLeaders';
import DepositPage from '../pages/wallet/Deposit/Deposit';
import HistoryMoneyPage from '../pages/wallet/HistoryMoney/HistoryMoney';
import WalletPage from '../pages/wallet/Wallet/Wallet';
import WithdrawMoneyPage from '../pages/wallet/WithdrawMoney/WithdrawMoney';

type Router = {
	path: string;
	element: ReactNode;
};

export const routerWithLayout: Router[] = [
	{
		element: <ImprovesPage />,
		path: '/improves',
	},
	{
		element: <FriendsPage />,
		path: '/friends',
	},
	{
		element: <QuestsPage />,
		path: '/quests',
	},
	{
		element: <BoostPage />,
		path: '/boost',
	},
	{
		element: <SettingsPage />,
		path: '/settings',
	},
	{
		element: <WithdrawMoneyPage />,
		path: '/withdraw',
	},
	{
		element: <HistoryMoneyPage />,
		path: '/history',
	},
	{
		element: <TableLeadersPage />,
		path: '/table-leaders',
	},
	{
		element: <AirDrop />,
		path: '/airDrop',
	},
	{
		element: <ShopPage />,
		path: '/shop',
	},
	{
		element: <LeadershipPage />,
		path: '/leadership',
	},
	{
		element: <DepositPage />,
		path: '/deposit',
	},
	{
		element: <WalletPage />,
		path: '/wallet',
	},
];

export const routerWithoutLayout: Router[] = [
	{
		element: <HomePage />,
		path: '/',
	},
	{
		element: <InstructionsPage />,
		path: '/instructions',
	},
];
