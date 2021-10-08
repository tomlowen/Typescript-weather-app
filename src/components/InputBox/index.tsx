import React from 'react';
type AppProps = { changeCity: (event: React.ChangeEvent<HTMLInputElement>) => void };
export default function InputBox({ changeCity }: AppProps) {
	return (
		<div>
			<label>City:</label>
			<input onChange={changeCity} type="text" placeholder="Enter city" />
		</div>
	);
}
