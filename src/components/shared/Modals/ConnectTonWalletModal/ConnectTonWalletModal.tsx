import imgWallet from '@/assets/images/wallet.png';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './ConnectTonWalletModal.module.css';

const ConnectTonWalletDrawer = () => {
	return (
		<Modal className={styles.drawer} position="bottom">
			<img src={imgWallet} alt="" className={styles.img} />
			<Title className={styles.title}>Подключай свой кошелёк TON </Title>
			<Text className={styles.text} color="gray">
				Подключите свой криптокошелек. Если у вас его нет, создайте его через
				ваш аккаунт в Telegram
			</Text>
			<Button className={styles.btn}>Подключить свой кошелёк TON</Button>
		</Modal>
	);
};

export default ConnectTonWalletDrawer;
