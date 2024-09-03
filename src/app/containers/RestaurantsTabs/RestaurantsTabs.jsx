import { Tabs } from '@/app/components/Tabs/Tabs';
import {
	selectRestaurant,
	selectRestaurantIds,
} from '@/store/entities/restaurant/selectors';
import { useSelector } from 'react-redux';

export const RestaurantsTabsContainer = ({ onTabClick }) => {
	const restaurants = useSelector(selectRestaurant);
	const tabs = restaurants.map(({ id, name }) => ({ id, title: name }));
	return <Tabs tabs={tabs} onTabClick={onTabClick} />;
};
