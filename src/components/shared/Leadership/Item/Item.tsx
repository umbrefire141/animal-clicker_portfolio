import { motion } from 'framer-motion';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import { IItem } from './Item.interface';

const Item = ({ leadership, setSelectedTab }: IItem) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<Banner
				title={leadership.title}
				percentBestPlayers={leadership.percentBestPlayers}
				setSelectedTab={setSelectedTab}
			/>
			<Information users={leadership.users} />
		</motion.div>
	);
};

export default Item;
