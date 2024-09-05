export const User = ({ user }) => {
	const { name } = user;
	return (
		<div>
			<p>{name}</p>
		</div>
	);
};
