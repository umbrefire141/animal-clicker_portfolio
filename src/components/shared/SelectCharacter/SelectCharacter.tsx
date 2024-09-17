import { useState } from 'react';
import SliderSkins from '../SliderSkins/SliderSkins';
import Information from './Information/Information';
import { characters } from './characters.const';

const SelectCharacter = () => {
	const images = characters.map(({ img }) => img);
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<div>
			<SliderSkins
				images={images.map(({ img }) => img)}
				index={imageIndex}
				setIndex={setImageIndex}
			/>
			<Information
				character={characters.find(({ id }) => id === 1)}
				images={images}
				index={imageIndex}
				setIndex={setImageIndex}
			/>
		</div>
	);
};

export default SelectCharacter;
