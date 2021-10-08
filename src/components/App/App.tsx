import React, {useState} from 'react';
import './App.css';
import CityForm from '../CityForm';

const apiKey = "796bea07ad90643ea4c2f47f784c35e0"
const initialState = {city: "Birmingham", unit: "metric"}

function App() {

  const [searchData, setSearchData] = useState(initialState);

	function changeCity(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchData({...searchData, city: event.target.value})
  }
	function unitChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setSearchData({...searchData, unit: event.target.value})
  }

	function handleClick() {
    const {city, unit} = searchData;
    fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`)
    .then((data)=> data.json())
    .then((res)=> console.log(res))
  }

	return (
		<div className="App">
			<CityForm changeCity={changeCity} unitChange={unitChange} handleClick={handleClick} />
		</div>
	);
}

export default App;
