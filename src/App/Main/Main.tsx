import React from 'react';
import { Filters } from './Filters/Filters';
import './Main.less';
import { MovieList } from './MoviesList/MovieList';
import { SortBy } from './SortBy/SortBy';

const sortingOptions: string[] = [
	'Release Date',
	'Name',
];

const filtersOptions: string[] = [
	'All',
	'Documentary',
	'Comedy',
	'Horror',
	'Crime',
];

export const Main = () => {
	function onSortChange(value: string) {
		console.log(value);
	}

	function onFiltersChange(value: string) {
		console.log(value);
	}

	return (
		<div className='main'>
			<div className='content-wrapper'>
				<div className='filters-panel__wrapper'>
					<Filters options={filtersOptions} handleChange={onFiltersChange}/>
					<SortBy options={sortingOptions} handleChange={onSortChange}/>
				</div>
				<MovieList/>
			</div>
		</div>
	);
};
