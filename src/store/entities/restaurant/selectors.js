export const selectRestaurantModule = state => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) =>
	selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantIds = state => selectRestaurantModule(state).ids;

export const selectRestaurant = state =>
	Object.values(selectRestaurantModule(state).entities);

export const selectMenuByRestaurantId = (state, { restaurantId }) =>
	selectRestaurantById(state, { restaurantId })?.menu;

export const selectReviewsByRestaurantId = (state, { restaurantId }) =>
	selectRestaurantById(state, { restaurantId })?.reviews;
