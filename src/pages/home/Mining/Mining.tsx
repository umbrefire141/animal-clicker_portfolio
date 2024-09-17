import energyIcon from '@/assets/icons/energy.svg';
import bootRocketImg from '@/assets/images/boost-rocket.png';
import coinIcon from '@/assets/images/virtual_coins.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Bar from '../../../components/ui/Bar/Bar';
import Character from './Character/Character';
import styles from './Mining.module.css';

const Mining = () => {
	const [energy] = useState<number>(1000);
	const [points, setPoints] = useState(0);
	// const { uuid } = useAppSelector((state: RootState) => state.user.user);

	// const coinsAndEnergyListener = (data: { coins: number; energy: number }) => {
	// 	setCoins(data.coins);
	// 	setEnergy(data.energy);
	// };

	return (
		<div className={styles.bg}>
			<div className={styles.content}>
				<div className={styles.coins}>
					<img src={coinIcon} alt="" className={styles.coins_img} />
					<div className={styles.coins_text}>{points}</div>
				</div>
				<Character setPoints={setPoints} />
				<div className={styles.info}>
					<div className={styles.row}>
						<div className={styles.energy}>
							<img src={energyIcon} alt="" className={styles.energy_img} />
							<div className={styles.energy_text}>{energy}/1000</div>
						</div>
						<Link to="/boost" className={styles.boost}>
							<img src={bootRocketImg} alt="" className={styles.boost_img} />
							<div className={styles.boost_text}>Ускорить</div>
						</Link>
					</div>
					<Bar percent={50} />
				</div>
			</div>
		</div>
	);
};

export default Mining;
