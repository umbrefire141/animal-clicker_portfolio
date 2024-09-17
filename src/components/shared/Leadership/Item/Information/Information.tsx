import Bar from '../../../../ui/Bar/Bar';
import Button from '../../../../ui/Button/Button';
import Text from '../../../../ui/Text/Text';
import User from '../../../User/User';
import { IInformation } from './Information.interface';
import styles from './Information.module.css';

const Information = ({ users }: IInformation) => {
	return (
		<>
			<div className={styles.increase}>
				<div className={styles.increase_row}>
					<div>
						<Text className={styles.increase_text}>Beginner</Text>
						<Text color="gray">Доход: 140К</Text>
					</div>
					<Button>Повысить lvl</Button>
				</div>
				<Bar percent={50} />
			</div>
			<div className={styles.users}>
				{users.map(user => (
					<User key={user} />
				))}
			</div>
		</>
	);
};

export default Information;
