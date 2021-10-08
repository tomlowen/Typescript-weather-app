import React from 'react';
import './App.css';
import CityForm from '../CityForm';

function App() {
	function changeCity() {}
	function unitChange() {}
	function handleClick() {}
	return (
		<div className="App">
			<CityForm changeCity={changeCity} unitChange={unitChange} handleClick={handleClick} />
		</div>
	);
}

export default App;
