import React, { useState } from 'react';
import './App.css';
import CityForm from '../CityForm';
import WeatherCard from '../WeatherCard';
import Toggle from "../Toggle"

interface SearchData {
	city: string;
	unit: string;
}

const initialSearchDataState: SearchData = { city: 'Birmingham', unit: 'metric' };
const initialWeatherDataArray: any = [];
const intitalUnits: string = "metric"

function App() {
	const [searchData, setSearchData] = useState(initialSearchDataState);
	const [weatherDataArray, setWeatherDataArray] = useState(initialWeatherDataArray);
	const [units, setUnits] = useState(intitalUnits)

	function changeCity(event: React.ChangeEvent<HTMLInputElement>): void {
		setSearchData({ ...searchData, city: event.target.value });
	}
	function unitChange(event: React.ChangeEvent<HTMLSelectElement>): void {
		setSearchData({ ...searchData, unit: event.target.value });
	}

	function handleClick() {
		const { city, unit } = searchData;
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.APIKEY}`
		)
			.then((data) => data.json())
			.then((res) => setWeatherDataArray([...weatherDataArray, res]))
			.catch((error) => console.log(error));
			console.log(units)
	}

	function removeCard(card: string) {
		setWeatherDataArray(weatherDataArray.filter((city: any)=> city.name !== card))
	}

	function toggleUnits() {
		if(units==="metric") {
			setUnits("imperial")
		} else {
			setUnits("metric")
		}
	}

	return (
		<div className="App">
			<Toggle handleClick={toggleUnits}/>
			<CityForm changeCity={changeCity} unitChange={unitChange} handleClick={handleClick} />
			{weatherDataArray.length > 0 &&
				weatherDataArray.map((city: any, index: number) => {
					return <WeatherCard city={city} handleClick={removeCard} units={units} key={index}/>;
				})}
		</div>
	);
}

export default App;
