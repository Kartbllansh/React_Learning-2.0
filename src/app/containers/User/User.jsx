import { User } from '@/app/components/User/User';
import { selectUserById } from '@/store/entities/user/selectors';
import { useSelector } from 'react-redux';

export const UserContainer = ({ userId }) => {
	const user = useSelector(state => selectUserById(state, { userId }));
	if (!user) {
		return null;
	}
	return <User user={user} />;
};
