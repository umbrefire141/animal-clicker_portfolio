import { useAppSelector } from '../../../hooks/useDispatch';
import { RootState } from '../../../store';
import ChangeSkinDrawer from './ChangeSkinDrawer/ChangeSkinDrawer';

const Drawers = () => {
	const { nameDrawer } = useAppSelector((state: RootState) => state.drawer);

	return <>{nameDrawer === 'changeSkin' && <ChangeSkinDrawer />}</>;
};

export default Drawers;
