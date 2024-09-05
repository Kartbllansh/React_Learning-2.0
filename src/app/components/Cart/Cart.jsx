import { useSelector } from 'react-redux';
import React from 'react';
import { selectCartModule } from '@/store/ui/cart/selectors';
import { Dish } from '../Dish/Dish';
import { DishContainer } from '@/app/containers/Dish/Dish';

export const Cart = ({ cartDishId }) => {
	console.log(cartDishId);
	return (
		<div>
			<h3>Cart</h3>
			<ul>
				{cartDishId.map(id => (
					<li key={id}>
						<DishContainer dishId={id} />
					</li>
				))}
			</ul>
		</div>
	);
};
