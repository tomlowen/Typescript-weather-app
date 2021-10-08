import React from 'react';
import './index.css';
export default function WeatherCard({ city }: any) {
	return (
		<div className="lg:flex shadow rounded-lg border w-1/2 mb-2 border-gray-400 max-w-screen-lg">
			<div className="flex justify-center bg-blue-600 rounded-lg lg:w-3/12 py-4 block h-full shadow-inner">
				<div className="text-center tracking-wide">
					<div className="text-white font-bold text-4xl ">
						<img
							src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
							alt="weather icon"
						/>{' '}
					</div>
					<div className="text-white font-normal text-2xl">{city.weather[0].main}</div>
				</div>
			</div>
			<div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
				<div className="flex flex-row lg:justify-between justify-center">
					<div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
						{city.main.temp.toFixed(0)}
						<sup> o</sup>C
					</div>
					<div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
						<p className="capitalize">{city.weather[0].description}</p>
					</div>
					<div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
						<p className="capitalize">Pressure:{city.main.pressure}</p>
					</div>
				</div>
				<div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
					{city.name}
				</div>

				<div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
					Feels like -- {Math.floor(city.main.feels_like)}
					<sup> o</sup>C
				</div>
				<div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
					Min -- {Math.floor(city.main.temp_min)}
					<sup> o</sup>C Max --{Math.floor(city.main.temp_max)}
					<sup> o</sup>C
				</div>
			</div>
			<div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
				<span className="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
					Clear
				</span>
			</div>
		</div>
	);
}
