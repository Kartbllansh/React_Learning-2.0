import { useCallback, useLayoutEffect, useState } from 'react';

export const useActiveId = ({ initialActiveId, localStorageName }) => {
	const [activeRestaurantId, setActiveRestaurantId] = useState(initialActiveId);

	const setActiveIdWithCache = useCallback(
		index => {
			setActiveRestaurantId(index);
			if (localStorageName) localStorage.setItem(localStorageName, index);
		},
		[localStorageName]
	);

	useLayoutEffect(() => {
		if (localStorageName) {
			const savedActiveId = localStorage.getItem(localStorageName);
			if (savedActiveId) {
				setActiveRestaurantId(savedActiveId);
			}
		}
	}, []); //Массив зависимостей мы принципиально оставляем пустым для того, чтобы useLayoutEffect срабатывал только один раз при amounte.

	//Как можно улучшить?
	// Забыл добавить значения по умолчанию для параметров
	// Надо было постараться сделать хук максимально общим. Для этого надо вынести логику localStorage в параметры.

	return {
		activeRestaurantId,
		setActiveRestaurantId: setActiveIdWithCache,
	};
};
