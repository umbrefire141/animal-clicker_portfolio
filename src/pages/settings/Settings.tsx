import { Link } from 'react-router-dom';
import ArrowIcon from '../../components/icons/ArrowIcon/ArrowIcon';
import SelectLanguage from '../../components/shared/SelectLanguage/SelectLanguage';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import styles from './Settings.module.css';

export default function SettingsPage() {
	return (
		<div className={styles.styles}>
			<Title className={styles.title}>Настройки</Title>
			<div className={styles.column}>
				<SelectLanguage />
				<Link to="/airDrop">
					<Sheet className={styles.item}>
						<Text>Airdrop</Text>
						<ArrowIcon />
					</Sheet>
				</Link>
				<Sheet className={styles.item}>
					<Text>Наш Telegram канал</Text>
					<ArrowIcon />
				</Sheet>
			</div>
		</div>
	);
}
