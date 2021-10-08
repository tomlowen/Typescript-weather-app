import React from 'react';
import './index.css';
import CustomButton from '../CustomButton';
import { motion } from "framer-motion"

type AppProps = {
	city: any;
	handleClick: (cityname: string) => void;
	units: string
};

export default function WeatherCard({ city, handleClick, units  }: AppProps) {
	const tempUnit = units==="metric" ? "C" : "F"

	function convertToFarenheit(temp: number) {
		return temp * 9/5 + 32;
	}

	return (
		<motion.div   animate={{ y: -50 }}
		transition={{ type: "spring", stiffness: 65 }}
 		className="lg:flex shadow rounded-lg border w-1/2 mb-2 border-gray-400 max-w-screen-lg">
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
					
						Feels like -- {units==="metric" ? Math.floor(city.main.feels_like) : convertToFarenheit(Math.floor(city.main.feels_like)) }
						<sup> o</sup>{tempUnit}
					</div>
					<div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
						<p className="capitalize">{city.weather[0].description}</p>
					</div>
					<div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
						<p className="capitalize">Pressure:{city.main.pressure}hPa</p>
					</div>
				</div>
				<div className="flex justify-between px-2 mt-4 mb-2">
					<div className="font-semibold text-gray-800 text-5xl text-center lg:text-left">
						{' '}
						{city.name} {units==="metric" ? city.main.temp.toFixed(0) : convertToFarenheit(city.main.temp.toFixed(0)) }
						<sup> o</sup>{tempUnit}
					</div>
					<div className="flex flex-col items-center justify-center">
						<p>Cloud coverage </p>
						<div className="relative">
							{' '}
							<img
								style={{ opacity: `${city.clouds.all}%` }}
								// style={{ opacity: '10%' }}
								className="w-16"
								src="/cloud-computing.png"
								alt="clouds"
							/>
							<p className="absolute inset-1/3">{city.clouds.all}%</p>
						</div>
					</div>
				</div>

				<div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2"></div>
				<div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
					Min -- {units==="metric" ? Math.floor(city.main.temp_min) : convertToFarenheit(Math.floor(city.main.temp_min)) }
					<sup> o</sup>{tempUnit} Max -- {units==="metric" ? Math.floor(city.main.temp_max) : convertToFarenheit(Math.floor(city.main.temp_max)) }
					<sup> o</sup>{tempUnit}
				</div>
			</div>
			<div className="flex flex-col justify-between w-full lg:w-1/4 bg-white px-2 lg:px-0">
				<CustomButton buttonText="Clear" handleClick={() => handleClick(city.name)} />
				<p>Wind speed: {units==="metric" ? city.wind.speed : Math.floor(city.wind.speed * 2.237) } {units==="metric" ? "m/s" : "mph" }</p>
				<p>Wind direction </p>
				<div className="flex justify-around align-center">
					<img className="w-14" src="/wind-sign.png" alt="flag" />
					<img
						style={{ transform: `rotate(${city.wind.deg - 90}deg)` }}
						className="w-10"
						src="/right-arrow.png"
						alt="wind arrow"
					/>
				</div>
			</div>
		</motion.div>
	);
}
