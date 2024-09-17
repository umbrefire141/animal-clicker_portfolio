import clsx from 'clsx';
import styles from './Circle.module.css';

const Circle = () => {
	return (
		<div className={styles.circle}>
			<svg
				width="438"
				height="439"
				viewBox="0 0 438 439"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<rect
					x="11"
					y="11"
					width="417"
					height="417"
					rx="208.5"
					strokeWidth="20"
					className={clsx(styles.pulse, styles.pulse_one)}
				/>
				<rect
					x="31"
					y="31"
					width="377"
					height="377"
					rx="188.5"
					strokeWidth="20"
					className={clsx(styles.pulse, styles.pulse_two)}
				/>
				<circle
					cx="219.5"
					cy="219.5"
					r="158.5"
					className={styles.circle_item}
				/>
				<circle
					cx="219.5"
					cy="219.5"
					r="158.5"
					fill="url(#pattern0_6089_3437)"
					fillOpacity="0.3"
				/>
				<circle
					cx="219.5"
					cy="219.5"
					r="168.5"
					className={clsx(styles.pulse, styles.pulse_three)}
					strokeWidth="20"
				/>
				<defs>
					<pattern
						id="pattern0_6089_3437"
						patternContentUnits="objectBoundingBox"
						width="1"
						height="1"
					>
						<use xlinkHref="#image0_6089_3437" transform="scale(0.00128535)" />
					</pattern>
					<image
						id="image0_6089_3437"
						width="778"
						height="778"
						xlinkHref="data:image/png;base64,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"
					/>
				</defs>
			</svg>
		</div>
	);
};

export default Circle;
