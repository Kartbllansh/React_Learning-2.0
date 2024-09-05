import { ReviewContainer } from '@/app/containers/Review/Review';
import { Review } from '../Review/Review';
import styles from './styles.module.scss';

export const Reviews = ({ reviews }) => {
	console.log(styles);
	return (
		<div>
			<h3>Review</h3>
			<div>
				{reviews.map(reviewId => (
					<ReviewContainer
						key={reviewId}
						reviewId={reviewId}
						className={styles.review}
					/>
				))}
			</div>
		</div>
	);
};
