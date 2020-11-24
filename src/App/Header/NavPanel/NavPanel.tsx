import React from 'react';
import { AppButton } from '../../Shared/Button/Button';
import './NavPanel.less';

export const NavPanel = () => {
	return (
		<div className='nav-panel__wrapper'>
			<h1>Find Your Movie</h1>
			<AppButton text='Add Movie'/>
		</div>
	);
};
