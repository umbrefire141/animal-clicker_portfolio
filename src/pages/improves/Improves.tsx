import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import Improvement from './Improvement/Improvement';
import { IProductComponent } from './Improvement/Improvement.interface';
import styles from './Improves.module.css';
import { sections } from './products.const';

export type sectionType = {
	type: string;
	improvements: IProductComponent[];
};

export default function ImprovesPage() {
	return (
		<div className={styles.improves}>
			<div className="container">
				<div className={styles.row}>
					<Title className={styles.title}>Улучшения</Title>
				</div>
				<div>
					{sections &&
						sections.map(section => (
							<div key={section.type}>
								<Text className={styles.text}>{section.type}</Text>
								<div>
									{section.products.map(product => (
										<Improvement
											key={product.id}
											img={product.img}
											title={product.title}
											description={product.description}
											information={product.information}
										/>
									))}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
