import React, { ChangeEvent, FC } from 'react';

interface ISortBy {
	options: string[];
	handleChange: Function;
}

export const SortBy: FC<ISortBy> = ({options = [], handleChange}) => {
	return (
		<select onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChange(event.target.value)}>
			{options.map((option: string) => {
				return <option key={option} value={option}>{option}</option>;
			})}
		</select>
	);
};
