import { Rating } from '@/app/components/Rating/Rating.jsx';
import { UserContainer } from '@/app/containers/User/User';

export const Review = ({ review, className }) => {
	const { rating, text, userId } = review;

	return (
		<div className={className}>
			<span>{'Customer:'}</span>
			<UserContainer userId={userId} />
			<Rating value={rating} />
			<p>{`Message: ${text}`}</p>
		</div>
	);
};
