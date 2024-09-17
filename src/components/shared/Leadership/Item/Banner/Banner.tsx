import ArrowIcon from '../../../../icons/ArrowIcon/ArrowIcon';
import Text from '../../../../ui/Text/Text';
import Title from '../../../../ui/Title/Title';
import { IBanner } from './Banner.interface';
import styles from './Banner.module.css';

const Banner = ({ title, percentBestPlayers, setSelectedTab }: IBanner) => {
	return (
		<>
			<Text className={styles.title}>Лидерборд</Text>
			<div className={styles.row}>
				<button onClick={() => setSelectedTab(prev => (prev === 2 ? 1 : 2))}>
					<ArrowIcon direction="left" />
				</button>
				<div className={styles.position}>
					<Title className={styles.position_name}>{title}</Title>
					<Text className={styles.position_text} color="gray">
						{percentBestPlayers}% лучших игроков
					</Text>
				</div>
				<button onClick={() => setSelectedTab(prev => (prev === 1 ? 2 : 1))}>
					<ArrowIcon />
				</button>
			</div>
		</>
	);
};

export default Banner;
