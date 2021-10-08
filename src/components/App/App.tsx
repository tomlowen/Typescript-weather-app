import React, { useState } from 'react';
import './App.css';
import CityForm from '../CityForm';
import WeatherCard from '../WeatherCard';

interface SearchData {
	city: string;
	unit: string;
}

const apiKey: string = '796bea07ad90643ea4c2f47f784c35e0';
const initialSearchDataState: SearchData = { city: 'Birmingham', unit: 'metric' };
const initialWeatherDataArray: any = [];

function App() {
	const [searchData, setSearchData] = useState(initialSearchDataState);
	const [weatherDataArray, setWeatherDataArray] = useState(initialWeatherDataArray);

	function changeCity(event: React.ChangeEvent<HTMLInputElement>): void {
		setSearchData({ ...searchData, city: event.target.value });
	}
	function unitChange(event: React.ChangeEvent<HTMLSelectElement>): void {
		setSearchData({ ...searchData, unit: event.target.value });
	}

	function handleClick() {
		const { city, unit } = searchData;
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
		)
			.then((data) => data.json())
			.then((res) => setWeatherDataArray([...weatherDataArray, res]))
			.catch((error) => console.log(error));
	}

	return (
		<div className="App">
			<CityForm changeCity={changeCity} unitChange={unitChange} handleClick={handleClick} />
			{weatherDataArray.length > 0 &&
				weatherDataArray.map((city: any) => {
					return <WeatherCard city={city} />;
				})}
		</div>
	);
}

export default App;
