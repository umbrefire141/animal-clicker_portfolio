import clsx from 'clsx';
import Text from '../../../ui/Text/Text';
import { ITabs } from './Tabs.interface';
import styles from './Tabs.module.css';

const Tabs = ({ tabs, selectedTab, setSelectedTab }: ITabs) => {
	return (
		<div className={styles.tabs}>
			{tabs.map(tab => (
				<button
					key={tab.id}
					className={clsx(styles.item, {
						[styles.active]: selectedTab === tab.id,
					})}
					onClick={() => setSelectedTab(tab.id)}
				>
					<Text className={styles.text}>{tab.type}</Text>
				</button>
			))}
		</div>
	);
};

export default Tabs;
