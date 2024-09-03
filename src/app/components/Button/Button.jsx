import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ThemeContext } from '@/contexts/ThemeContext/themeContext';

const buttonStyles = {
	primary: styles.primary,
	secondary: styles.secondary,
};

export function Button({
	children,
	disabled,
	type = 'primary',
	className,
	onClick,
}) {
	const { theme } = useContext(ThemeContext); //тут будет значение ближайшего к этому компоненту поставщика этого контекста
	return (
		<button
			className={classNames({
				[styles.root]: true,
				[buttonStyles[type]]: true,
				[styles.disabled]: disabled,
				[className]: true,
			})}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
