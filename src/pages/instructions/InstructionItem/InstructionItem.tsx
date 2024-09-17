import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';
import { useAppDispatch } from '../../../hooks/useSelector';
import {
	setInstructionedSync,
	setSelectedCharacter,
} from '../../../store/user/user.slice';
import { IInstructionItemComponent } from './InstructionItem.interface';
import styles from './InstructionItem.module.css';

const variants = {
	initial: {
		x: 200,
		opacity: 0,
	},

	animate: {
		x: 0,
		opacity: 1,
	},

	exit: {
		x: -200,
		opacity: 0,
	},
};

const InstructionItem = ({
	image,
	imgStyles,
	bgImg,
	title,
	description,
	additionItem,
	selectedInstruction,
	setSelectedInstruction,
}: IInstructionItemComponent) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const navigateInstruction = () => {
		if (selectedInstruction === 7) {
			dispatch(setInstructionedSync());

			setTimeout(() => {
				navigate('/home');
			}, 100);
		}

		setSelectedInstruction(prev => prev + 1);
	};

	const setCharacter = () => {
		dispatch(setSelectedCharacter());
		navigateInstruction();
	};

	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				x: { type: 'spring', stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 },
			}}
			className={styles.item}
		>
			{bgImg && <img src={bgImg} alt="" className={styles.bg} />}

			<div
				className={`${styles.container} ${
					selectedInstruction !== 7 && styles.height
				}`}
			>
				<div>
					<motion.h2
						initial={{ x: -500 }}
						animate={{ x: 0 }}
						className={styles.title}
					>
						{title}
					</motion.h2>
					{image && (
						<motion.img
							initial={{ x: -500 }}
							animate={{ x: 0 }}
							src={image}
							alt=""
							style={imgStyles}
							className={styles.img}
						/>
					)}
					{description && <div className={styles.text}>{description}</div>}
					<motion.div
						initial={{ x: -500 }}
						animate={{ x: 0 }}
						className={styles.additionItem}
					>
						{additionItem}
					</motion.div>
				</div>
				<div className={styles.row}>
					{selectedInstruction === 7 && (
						<Button onClick={setCharacter} className={styles.select}>
							Выбрать
						</Button>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default InstructionItem;
