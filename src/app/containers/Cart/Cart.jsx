import { Cart } from '@/app/components/Cart/Cart';
import { selectCartModule } from '@/store/ui/cart/selectors';
import { useSelector } from 'react-redux';

export const CartContainer = () => {
	const cart = useSelector(selectCartModule); //Тут появляется локальное состояние

	const cartDishId = Object.keys(cart);
	if (!cartDishId?.length) {
		return null;
	}
	return <Cart cartDishId={cartDishId} />;
};
