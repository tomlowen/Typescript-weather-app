import React from 'react';
type AppProps = { unitChange: () => void };
export default function UnitDropdown({ unitChange }: AppProps) {
	return (
		<select onChange={unitChange}>
			<option value="metric">metric</option>
			<option value="imperial">imperial</option>
		</select>
	);
}
