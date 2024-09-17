import clsx from 'clsx';
import Avatar from '../../../ui/Avatar/Avatar';
import Text from '../../../ui/Text/Text';
import { IInformation } from './Information.interface';
import styles from './Information.module.css';

const Information = ({ character, images, index, setIndex }: IInformation) => {
	return (
		<div className={styles.information}>
			<Text className={styles.name}>{character.name}</Text>
			<div className={styles.description}>{character.description}</div>
			<div className={styles.grid}>
				{images.map((image, i) => (
					<div
						key={image.id}
						className={clsx(styles.item, { [styles.active]: i === index })}
						onClick={() => setIndex(i)}
					>
						<div className={styles.wrapper}>
							<Avatar className={styles.img} img={image.img} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Information;
