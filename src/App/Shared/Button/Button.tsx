import React, { FC } from 'react';
import './Button.less';

interface IButton {
	text: string;
}

export const AppButton: FC<IButton> = ({text}) => {
	return (
		<button>{text}</button>
	);
};
