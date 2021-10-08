import React from 'react';
type AppProps = { unitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void };
export default function UnitDropdown({ unitChange }: AppProps) {
	return (
		<select onChange={unitChange}>
			<option value="metric">metric</option>
			<option value="imperial">imperial</option>
		</select>
	);
}
