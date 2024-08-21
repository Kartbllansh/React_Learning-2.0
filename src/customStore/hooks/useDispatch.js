import { useContext } from 'react';
import { StoreContext } from '../StoreContext/StoreContext';

//Напрямую использовать метод dispatch у Store мы не можем, тогда мы будет жестко завязаны на его реализации, поэтому мы используем некие "прослойки"
export const useDispatch = () => {
	const store = useContext(StoreContext);

	return store.dispatch.bind(store); //bind закрепляет значение this
};
