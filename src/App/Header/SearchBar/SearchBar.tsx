import React from 'react';
import { AppButton } from '../../Shared/Button/Button';
import './SearchBar.less';

export const SearchBar = () => {
	return (
		<div className='search-bar'>
			<input />
			<AppButton text='Search' />
		</div>
	);
};
