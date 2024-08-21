import { useMemo, useState } from 'react';
import { ThemeContext } from './themeContext';
import { Button } from '@/app/components/Button/Button';

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('default');
	//Благодаря хуку будем избегать перерендеров
	const contextValue = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	);
	return (
		// Provider - поставщик этого контекста. Контекст хранит значение, а Provider его распространяет
		//То что му укажем в value и будет поставляемым значением
		//Обращаться к этому значению могут потребители. Потребители - это те, кого оборачивает внутри себя поставщик и их дочерние

		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};
