import imgWallet from '@/assets/images/wallet.png';
import clsx from 'clsx';
import AttachmentIcon from '../../../icons/AttachmentIcon/AttachmentIcon';
import CloseIcon from '../../../icons/CloseIcon/CloseIcon';
import Button from '../../../ui/Button/Button';
import Field from '../../../ui/Field/Field';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './ConnectedTonWalletModal.module.css';

const ConnectedTonWalletModal = () => {
	return (
		<Modal className={styles.drawer} position="bottom">
			<img src={imgWallet} alt="" className={styles.img} />
			<Title className={styles.title}>Ваш кошелёк TON подключен</Title>
			<Text className={styles.text}>
				Вы можете отключить его или скопировать адрес кошелька
			</Text>
			<div className={styles.row}>
				<Button color="clear" className={clsx(styles.btn, styles.close)}>
					<CloseIcon />
				</Button>
				<Field
					className={styles.input}
					type="text"
					color="clear"
					placeholder="FIJFDjJ....dfjfj98_jdfj"
				/>
				<Button color="purple" className={styles.btn}>
					<AttachmentIcon />
				</Button>
			</div>
		</Modal>
	);
};

export default ConnectedTonWalletModal;
