import React from 'react';
import './Header.less';
import { NavPanel } from './NavPanel/NavPanel';
import { SearchBar } from './SearchBar/SearchBar';

export const Header = () => {
	return (
		<div className='header'>
			<div className='header__wrapper content-wrapper'>
				<NavPanel/>
				<SearchBar/>
			</div>
		</div>
	);
}
