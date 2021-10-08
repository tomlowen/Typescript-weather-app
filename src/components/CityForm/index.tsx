import React from 'react';
import UnitDropdown from '../UnitDropdown/';
import InputBox from '../InputBox';
import Button from '../CustomButton';

type AppProps = {
	changeCity: () => void;
	unitChange: () => void;
	handleClick: () => void;
};
export default function index({ changeCity, unitChange, handleClick }: AppProps) {
	return (
		<div>
			<InputBox changeCity={changeCity} />
			<UnitDropdown unitChange={unitChange} />
			<Button label="Get Weather" handleClick={handleClick} />
		</div>
	);
}
