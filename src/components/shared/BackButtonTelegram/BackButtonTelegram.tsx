import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { useLocation, useNavigate } from 'react-router-dom';

const BackButtonTelegram = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	if (pathname === '/instructions' || pathname === '/') return;

	return <BackButton onClick={() => navigate(-1)} />;
};

export default BackButtonTelegram;
