import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useDispatch';
import { RootState } from '../../store';

const CheckUserIsInstructioned = ({ children }: PropsWithChildren) => {
	const { user } = useAppSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user?.isInstructioned) navigate('/instructions');
	}, [user]);

	return <>{children}</>;
};

export default CheckUserIsInstructioned;
