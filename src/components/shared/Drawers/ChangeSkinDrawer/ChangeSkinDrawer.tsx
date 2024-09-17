import lock from '@/assets/icons/lock.svg';

import coins from '@/assets/images/virtual_coins.png';
import clsx from 'clsx';
import { useState } from 'react';
import Drawer from '../../../ui/Drawer/Drawer';
import Text from '../../../ui/Text/Text';
import SliderSkins from '../../SliderSkins/SliderSkins';
import styles from './ChangeSkinDrawer.module.css';
import { images } from './imagesAnimals';

const ChangeSkinDrawer = () => {
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<Drawer className={styles.drawer}>
			<SliderSkins
				images={images}
				index={imageIndex}
				setIndex={setImageIndex}
			/>
			<Text className={styles.name}>Медведь </Text>
			<Text className={styles['skin-text']} color="gray">
				Скин "Уличный Стиль"{' '}
			</Text>
			<div className={styles.row}>
				<div className={styles.item}>
					<div className={styles.item_text}>Стоимость</div>
					<div className={styles.money}>
						<img src={coins} className={styles.money_img} />
						<div className={styles.money_text}>1000</div>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.item_text}>Ежедневный доход </div>
					<div className={styles.money}>
						<img src={coins} className={styles.money_img} />
						<div className={styles.money_text}>+10%</div>
					</div>
				</div>
			</div>
			<div className={styles.skins}>
				{images.map((image, i) => (
					<div
						className={clsx(styles.skin, { [styles.active]: i === imageIndex })}
						onClick={() => setImageIndex(i)}
						key={i}
					>
						<div className={styles.skin_wrapper}>
							<img src={image} className={styles.skin_img} />
							{i !== 0 && <img src={lock} className={styles.skin_lock} />}
						</div>
					</div>
				))}
			</div>
			{/* <Button >Продать 1К</Button> */}
		</Drawer>
	);
};

export default ChangeSkinDrawer;
