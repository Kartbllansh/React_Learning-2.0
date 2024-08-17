import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { nanoid } from 'nanoid';
import { Header } from '../Header/Header';
import { Tabs } from '@/app/components/Tabs/Tabs.jsx';
import { useEffect, useLayoutEffect, useState } from 'react';

function getRestaurants() {
	return restaurants.map(restaurant => ({
		...restaurant,
		menu: restaurant.menu.map(dish => ({
			...dish,
			ingredients: dish.ingredients.map(ingredient => ({
				id: nanoid(),
				name: ingredient,
			})),
		})),
	}));
}

export function Home() {
	const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

	const customerRestaurants = getRestaurants();

	const setActiveRestaurantIndexWithCache = index => {
		setActiveRestaurantIndex(index);
		localStorage.setItem('ActiveRestaurantIndex', index);
	};

	useLayoutEffect(() => {
		const savedActiveRestaurantIndex = localStorage.getItem(
			'ActiveRestaurantIndex'
		);
		if (savedActiveRestaurantIndex) {
			setActiveRestaurantIndex(savedActiveRestaurantIndex);
		}
	}, []);

	const activeRestaurant = customerRestaurants[activeRestaurantIndex];

	return (
		<div>
			<Header />
			<Tabs
				restaurants={customerRestaurants}
				onTabClick={setActiveRestaurantIndexWithCache}
			/>
			<Restaurant key={customerRestaurants.id} restaurant={activeRestaurant} />
		</div>
	);
}
