import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Item from './Item/Item';
import { leaderships } from './leadership.const';
import styles from './Leadership.module.css';

const Leadership = () => {
	const [selectedTab, setSelectedTab] = useState<number>(1);

	return (
		<div className={styles.leadership}>
			<AnimatePresence mode="wait">
				{leaderships.map(
					leadership =>
						selectedTab === leadership.id && (
							<Item
								key={leadership.id}
								leadership={leadership}
								setSelectedTab={setSelectedTab}
							/>
						)
				)}
			</AnimatePresence>
		</div>
	);
};

export default Leadership;
