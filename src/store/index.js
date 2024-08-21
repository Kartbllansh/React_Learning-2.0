import { createStore } from '@/customStore';

const rootReducer = (state = {}, action) => {
	//Наш Reducer, который будет отвечать за логику изменения значений в Store
	switch (action?.type) {
		case 'increment':
			return {
				...state,
				[action.payload]: state[action.payload] ? state[action.payload] + 1 : 1,
			};
		case 'decrement':
			return {
				...state,
				[action.payload]: state[action.payload] ? state[action.payload] - 1 : 0,
			};

		default:
			return state;
	}
};
export const store = createStore(rootReducer); //Иницилизируем Store в первый раз
