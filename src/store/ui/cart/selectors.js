//Selector модуля
export function selectCartModule(state) {
	return state.cart;
}
//Вторым аргументов лучше всегда передавать объект
export const selectDishAmount = (state, { dishId }) =>
	selectCartModule(state)[dishId] || 0;
