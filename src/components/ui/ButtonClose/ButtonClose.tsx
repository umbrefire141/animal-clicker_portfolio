import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';
import { IButtonClose } from './ButtonClose.interface';
import styles from './ButtonClose.module.css';

const ButtonClose = ({ func }: IButtonClose) => {
	const navigate = useNavigate();

	return (
		<button className={styles.btn} onClick={func ? func : () => navigate('/')}>
			<CloseIcon />
		</button>
	);
};

export default ButtonClose;
