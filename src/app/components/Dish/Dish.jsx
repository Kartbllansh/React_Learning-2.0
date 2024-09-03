import { Button } from '../Button/Button';
import styles from './styles.module.scss';
import ThumbDown from './images/thumb-down.svg';
import ThumbUp from './images/thumb-up.svg';
import { useEffect, useState } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';
import { useAmount } from '@/hooks/useAmount';
import { useDispatch, useSelector } from 'react-redux';
import { decrementDish, incrementDish } from '@/store/ui/cart/actions';
import { selectDishAmount } from '@/store/ui/cart/selectors';

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish, amount, increment, decrement }) => {
	//const { amount, increment, decrement } = useAmount(0);

	if (!dish) {
		return null;
	}

	const { name, ingredients } = dish;

	return (
		<div>
			<div className={styles.mainInfo}>
				<span className={styles.title}>{name}</span>
				<Button
					disabled={amount === 5}
					onClick={increment}
					type={'secondary'}
					className={styles.incrementAction}
				>
					+
				</Button>
				<Button
					onClick={decrement}
					className={styles.decrementAction}
					disabled={amount === 0}
				>
					-
				</Button>

				<span> Статус:{amount || 'Блюдо не выбрано'}</span>
			</div>
			<div>
				{/*mount > 0 && (
					<Ingredients
						ingredients={ingredients}
						className={styles.ingredients}
					/>
				)*/}
			</div>
		</div>
	);
};
