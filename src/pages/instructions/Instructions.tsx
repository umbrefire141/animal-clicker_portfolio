import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import { useAppDispatch } from '../../hooks/useSelector';
import {
	setInstructionedSync,
	setSelectedCharacter,
} from '../../store/user/user.slice';
import InstructionItem from './InstructionItem/InstructionItem';
import { instructions } from './instructions.const';
import styles from './Instructions.module.css';
import Pagination from './Pagination/Pagination';

export default function InstructionsPage() {
	const [selectedInstruction, setSelectedInstruction] = useState<number>(1);
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
		<div
			className={clsx(styles.instruction, {
				[styles.maxHeight]: selectedInstruction !== 7,
			})}
		>
			<div className={styles.item}>
				<AnimatePresence initial={false} mode="wait">
					{instructions.map(
						instruction =>
							selectedInstruction === instruction.id && (
								<InstructionItem
									key={instruction.id}
									image={instruction.image}
									bgImg={instruction.bgImg}
									imgStyles={instruction.imgStyles}
									title={instruction.title}
									description={instruction.description}
									additionItem={instruction.additionitem}
									selectedInstruction={selectedInstruction}
									setSelectedInstruction={setSelectedInstruction}
								/>
							)
					)}
				</AnimatePresence>
				{selectedInstruction !== 7 && (
					<div className={styles.row}>
						<Pagination
							items={instructions}
							paginationActive={selectedInstruction}
							setSelectedInstruction={setSelectedInstruction}
						/>
						{selectedInstruction === 7 ? (
							<Button onClick={setCharacter} className={styles.select}>
								Выбрать
							</Button>
						) : (
							<Button className={styles.btn} onClick={navigateInstruction}>
								Далее
							</Button>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
