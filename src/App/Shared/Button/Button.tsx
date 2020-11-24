import React from 'react';
import './Button.less';

interface IButton {
	text: string;
}

export const AppButton: React.FC<IButton> = ({text}) => {
	return (
		<button>{text}</button>
	);
};
