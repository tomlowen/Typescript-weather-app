import React from 'react';

type AppProps = {
	buttonText: string;
	handleClick: () => void;
};
export default function Button({ buttonText, handleClick }: AppProps) {
	return <button onClick={handleClick}>{buttonText}</button>;
}
