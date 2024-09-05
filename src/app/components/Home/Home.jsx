import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { Header } from '../Header/Header';
import { Tabs } from '@/app/components/Tabs/Tabs.jsx';
import { useActiveId } from '@/hooks/useActiveIndex';
import { ThemeContextProvider } from '@/contexts/ThemeContext/ThemeContextProvider';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { Cart } from '../Cart/Cart';
import { RestaurantsTabsContainer } from '@/app/containers/RestaurantsTabs/RestaurantsTabs';
import { RestaurantContainer } from '@/app/containers/Restaurant/Restaurant';
import { CartContainer } from '@/app/containers/Cart/Cart';

export function Home() {
	const { activeRestaurantId, setActiveRestaurantId } = useActiveId({
		localStorageName: 'ActiveRestaurantId',
	});

	return (
		<Provider store={store}>
			<ThemeContextProvider>
				<div>
					<Header />
					<RestaurantsTabsContainer
						restaurants={restaurants}
						onTabClick={setActiveRestaurantId}
					/>
					{activeRestaurantId && (
						<RestaurantContainer restaurantId={activeRestaurantId} />
					)}
					<CartContainer />
				</div>
			</ThemeContextProvider>
		</Provider>
	);
}
