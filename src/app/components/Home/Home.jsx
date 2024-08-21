import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { Header } from '../Header/Header';
import { Tabs } from '@/app/components/Tabs/Tabs.jsx';
import { useActiveIndex } from '@/hooks/useActiveIndex';
import { ThemeContextProvider } from '@/contexts/ThemeContext/ThemeContextProvider';
import { Provider } from '@/customStore';
import { store } from '@/store';
import { Cart } from '../Cart/Cart';

export function Home() {
	const { activeIndex, setActiveIndex } = useActiveIndex({
		localStorageName: 'ActiveRestaurantIndex',
	});

	//const customerRestaurants = getRestaurants();

	const activeRestaurant = restaurants[activeIndex];

	return (
		<Provider store={store}>
			<ThemeContextProvider>
				<div>
					<Header />
					<Tabs restaurants={restaurants} onTabClick={setActiveIndex} />
					{activeRestaurant && (
						<Restaurant
							key={activeRestaurant.id}
							restaurant={activeRestaurant}
						/>
					)}
					<Cart />
				</div>
			</ThemeContextProvider>
		</Provider>
	);
}
