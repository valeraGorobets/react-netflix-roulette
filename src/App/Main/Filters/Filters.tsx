import React, { FC, MouseEvent } from 'react';
import './Filters.less';

interface ISortBy {
	options: string[];
	handleChange: Function;
}

export const Filters: FC<ISortBy> = ({options = [], handleChange}) => {
	return (
		<div className='filters-list'>
			{options.map((option: string) => {
				return (
					<div
						key={option}
						className='filters-item'
						onClick={(event: MouseEvent<HTMLElement>) => handleChange((event.target as HTMLInputElement).innerText)}>
							{option}
					</div>
				);
			})}
		</div>
	);
};
