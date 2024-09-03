import { combineReducers, createStore } from 'redux';
import { cartReducer } from './ui/cart';
import { restaurantReducer } from './entities/restaurant';
import { dishReducer } from './entities/dish';

const rootReducer = combineReducers({
	cart: cartReducer,
	restaurant: restaurantReducer,
	dish: dishReducer,
});
/* Это равносильная запись
const rootReducer = (state = {}, action) => {
	return {
		cart: cartReducer(state.cart, action),
	};
};*/
export const store = createStore(rootReducer); //Иницилизируем Store в первый раз
