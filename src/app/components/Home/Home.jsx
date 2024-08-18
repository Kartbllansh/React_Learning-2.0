import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { Header } from '../Header/Header';
import { Tabs } from '@/app/components/Tabs/Tabs.jsx';
import { useActiveIndex } from '@/hooks/useActiveIndex';

export function Home() {
	const { activeIndex, setActiveIndex } = useActiveIndex({
		localStorageName: 'ActiveRestaurantIndex',
	});

	//const customerRestaurants = getRestaurants();

	const activeRestaurant = restaurants[activeIndex];

	return (
		<div>
			<Header />
			<Tabs restaurants={restaurants} onTabClick={setActiveIndex} />
			<Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
		</div>
	);
}
