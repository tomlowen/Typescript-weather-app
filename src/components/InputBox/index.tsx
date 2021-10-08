import React from 'react';
type AppProps = { changeCity: (event: React.ChangeEvent<HTMLInputElement>) => void };
export default function InputBox({ changeCity }: AppProps) {
	return (
		<div className="md:flex md:items-center mb-6">
			<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">City:</label>
			<input className="h-11 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" onChange={changeCity} type="text" placeholder="Enter city" />
		</div>
	);
}
