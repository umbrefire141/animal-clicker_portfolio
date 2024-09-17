import { useState } from 'react';
import Title from '../../ui/Title/Title';
import Improvement from './Improvement/Improvement';
import styles from './Improves.module.css';
import Tabs from './Tabs/Tabs';
import { Improvements } from './improves.const';

const Improves = () => {
	const [selectedTab, setSelectedTab] = useState<number>(1);

	const tabs = Improvements.map(({ id, type }) => ({ id, type }));

	return (
		<div>
			<div className={styles.row}>
				<Title>Усиления</Title>
			</div>
			<Tabs
				tabs={tabs}
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
			/>
			<div className={styles.improvements}>
				{Improvements.find(
					improvement => improvement.id === selectedTab
				).improvements.map(improvement => (
					<Improvement
						img={improvement.img}
						key={improvement.id}
						cost={improvement.cost}
						description={improvement.description}
						profit={improvement.profit}
						title={improvement.title}
					/>
				))}
			</div>
		</div>
	);
};

export default Improves;
