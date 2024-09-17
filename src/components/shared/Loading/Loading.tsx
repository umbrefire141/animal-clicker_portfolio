import characterImgPng from '@/assets/images/loading-character.png';
import characterImgWebp from '@/assets/images/loading-character.webp';
import Bar from '../../ui/Bar/Bar';
import Text from '../../ui/Text/Text';
import Circle from './Circle/Circle';
import styles from './Loading.module.css';
import TextLoading from './TextLoading';

const Loading = () => {
	return (
		<div className={styles.loading}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					<span>Beast</span> Tap
				</h1>
				<div className={styles.character}>
					<picture className={styles.img}>
						<source srcSet={characterImgWebp} type="image/webp"></source>
						<source srcSet={characterImgPng} type="image/png"></source>
						<img src={characterImgPng} alt="" className={styles.img} />
					</picture>
					<Circle />
				</div>
				<div className={styles.progress}>
					<Text className={styles.progress_text}>Загрузка...</Text>
					<Bar percent={100} />
				</div>
				<div className={styles.text}>
					<TextLoading />
				</div>
			</div>
		</div>
	);
};

export default Loading;
