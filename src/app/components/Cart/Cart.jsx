import { useSelector } from '@/customStore';
import React from 'react';

export const Cart = () => {
	const cartState = useSelector(state => state); //Тут появляется локальное состояние
	console.log(cartState);
	return (
		<ul>
			{Object.entries(cartState).map(([name, count]) => (
				<li key={name}>
					{name} - {count}
				</li>
			))}
		</ul>
	);
};
