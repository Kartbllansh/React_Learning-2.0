import { useMemo } from 'react';
import { Menu } from '../Menu/Menu';
import { NewReviewFrom } from '../NewReviewForm/NewReviewFrom';
import { Rating } from '../Rating/Rating';
import { Reviews } from '../Reviews/Reviews';
import { RestaurantMenuContainer } from '@/app/containers/RestaurantMenu/RestaurantMenu';
import { RestaurantReviewContainer } from '@/app/containers/RestaurantReviews/RestaurantReviews';

export const Restaurant = ({ restaurant }) => {
	const { name, id } = restaurant || {};
	/*const rating = useMemo(
		() =>
			!!reviews.length
				? Math.floor(
						reviews.reduce((acc, review) => acc + review.rating, 0) /
							reviews.length
				  )
				: 0,
		[reviews]
	);*/

	return (
		<div key={id}>
			<h2>{name}</h2>

			{/*<Rating value={rating} />*/}
			<RestaurantMenuContainer restaurantId={id} />
			<RestaurantReviewContainer restaurantId={id} />

			<NewReviewFrom />
		</div>
	);
};
