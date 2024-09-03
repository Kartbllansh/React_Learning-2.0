//Каждый модуль определяется Reducerом

import { CART_ACTIONS } from './actions';

const initialState = {};
export const cartReducer = (state = initialState, action) => {
	switch (action?.type) {
		case CART_ACTIONS.increment:
			return {
				...state,
				[action.payload]: state[action.payload] ? state[action.payload] + 1 : 1,
			};
		case CART_ACTIONS.decrement:
			return {
				...state,
				[action.payload]: state[action.payload] ? state[action.payload] - 1 : 0,
			};

		default:
			return state;
	}
};
