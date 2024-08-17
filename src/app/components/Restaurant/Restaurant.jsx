import { useMemo } from 'react';
import { Menu } from '../Menu/Menu';
import { NewReviewFrom } from '../NewReviewForm/NewReviewFrom';
import { Rating } from '../Rating/Rating';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
	const { name, menu, reviews, id } = restaurant || {};
	const rating = useMemo(
		() =>
			!!reviews.length
				? Math.floor(
						reviews.reduce((acc, review) => acc + review.rating, 0) /
							reviews.length
				  )
				: 0,
		[reviews]
	);

	return (
		<div key={id}>
			<h2>{name}</h2>
			<Rating value={rating} />
			<Menu menu={menu} />
			<Reviews reviews={reviews} />
			<NewReviewFrom />
		</div>
	);
};
