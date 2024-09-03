import { useSelector } from 'react-redux';
import React from 'react';
import { selectCartModule } from '@/store/ui/cart/selectors';
import { Dish } from '../Dish/Dish';
import { DishContainer } from '@/app/containers/Dish/Dish';

export const Cart = () => {
	const cartState = useSelector(selectCartModule); //Тут появляется локальное состояние

	return (
		<div>
			<h3>Cart</h3>
			<ul>
				{Object.entries(cartState).map(([id]) => (
					<li key={id}>
						<DishContainer dishId={id} />
					</li>
				))}
			</ul>
		</div>
	);
};
