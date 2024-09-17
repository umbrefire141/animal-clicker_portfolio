import img from '@/assets/images/txt-qr.png';
import styles from './QRCode.module.css';

const QRCode = () => {
	return (
		<div className={styles.qrcode}>
			<img src={img} className={styles.img} />
		</div>
	);
};

export default QRCode;
