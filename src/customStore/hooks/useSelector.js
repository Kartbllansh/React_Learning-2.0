import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { StoreContext } from '../StoreContext/StoreContext';

//Задача useSelector: получить данные из Store, при изменение получать новые данные и перерендывать компоненты
export const useSelector = selector => {
	const store = useContext(StoreContext);
	const [value, setValue] = useState(() => selector(store.getState())); //тут функция, чтобы initialState срабатывал только один раз
	//Лучше всего провести подписку во время mounta компонента
	//А отписку - на destroy
	useLayoutEffect(() => {
		const callback = value => setValue(selector(value)); //Проблема в том, что value - это весь store, и reducer при срабывании всегда создает новый объект, а значит перерендер будут в 100% случаев. Что делаем? В параметры хука будет передавать функции, которая будет уточнять state(selector)
		store.subscribe(callback); //подписка
		return () => {
			store.unsubscribe(callback); //отписка
		};
	}, []);
	return value;
};
