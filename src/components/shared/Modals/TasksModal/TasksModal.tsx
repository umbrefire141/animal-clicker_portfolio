import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import { ITasksModal } from './TasksModal.interface';
import styles from './TasksModal.module.css';

const TasksModal = ({ img, title, description, buttonText }: ITasksModal) => {
	return (
		<Modal className={styles.modal} position="bottom">
			<img src={img} className={styles.img} />
			<Title className={styles.title}>{title}</Title>
			<Text className={styles.text} color="gray">
				{description}
			</Text>
			<Button className={styles.btn}>{buttonText}</Button>
		</Modal>
	);
};

export default TasksModal;
