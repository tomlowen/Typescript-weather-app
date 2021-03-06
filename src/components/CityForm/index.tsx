import React from 'react';
import UnitDropdown from '../UnitDropdown/';
import InputBox from '../InputBox';
import CustomButton from '../CustomButton';

type AppProps = {
	changeCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
	unitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	handleClick: () => void;
};
export default function CityForm({ changeCity, unitChange, handleClick }: AppProps) {
	return (
		<div className="form mb-20 mt-10">
			<div className="flex rounded space-x-3">
				<InputBox changeCity={changeCity} />
				<UnitDropdown unitChange={unitChange} />
				<CustomButton buttonText="Get Weather" handleClick={handleClick} />
			</div>
		</div>
	);
}
