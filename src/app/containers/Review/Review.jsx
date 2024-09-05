import { Review } from '@/app/components/Review/Review';
import {
	selectReviewById,
	selectReviewModule,
} from '@/store/entities/review/selectors';
import { useSelector } from 'react-redux';

export const ReviewContainer = ({ reviewId, className }) => {
	//Забыл скобки
	//	console.log(useSelector(state => selectReviewModule(state)));
	const review = useSelector(state => selectReviewById(state, { reviewId }));
	console.log(review);
	if (!review) {
		return null;
	}
	return <Review review={review} className={className} />;
};
