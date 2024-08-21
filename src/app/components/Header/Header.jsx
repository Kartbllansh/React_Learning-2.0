import React, { useContext } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { ThemeContext } from '@/contexts/ThemeContext/themeContext';

export const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<header className={styles.root}>
			<Image
				priority
				src='/images/logo.png'
				width={115}
				height={18}
				alt='logo'
			/>
			<Button
				onClick={() => setTheme(theme === 'default' ? 'dark' : 'default')}
			>
				Change theme
			</Button>
		</header>
	);
};
