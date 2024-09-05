export const selectReviewModule = state => state.reviews;

export const selectReviewById = (state, { reviewId }) => {
	return selectReviewModule(state).entities[reviewId];
};
