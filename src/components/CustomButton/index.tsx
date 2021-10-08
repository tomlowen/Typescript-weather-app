import React from 'react';

type AppProps = {
	label: string;
	handleClick: () => void;
};
export default function Button({ label, handleClick }: AppProps) {
	return <button onClick={handleClick}>{label}</button>;
}
