import React from 'react';

type AppProps = {
	buttonText: string;
	handleClick: () => void;
};
export default function Button({ buttonText, handleClick }: AppProps) {
	return <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded h-11" onClick={handleClick}>{buttonText}</button>;
}
