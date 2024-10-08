import { normalizedRestaurants } from '@/app/constants/normalized-fixtures';

const initialState = {
	entities: normalizedRestaurants.reduce((acc, restaurant) => {
		acc[restaurant.id] = restaurant;
		return acc;
	}, {}),
	ids: normalizedRestaurants.map(({ id }) => id),
};
console.log(initialState);

export const restaurantReducer = (state = initialState, action) => {
	return state;
};
