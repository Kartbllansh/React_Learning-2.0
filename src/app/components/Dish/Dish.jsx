import { Button } from '../Button/Button';
import styles from './styles.module.scss';
import ThumbDown from './images/thumb-down.svg';
import ThumbUp from './images/thumb-up.svg';
import { useEffect, useState } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';
import { useAmount } from '@/hooks/useAmount';

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish }) => {
	const { amount, increment, decrement } = useAmount(0);

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
				{amount > 0 && (
					<Ingredients
						ingredients={ingredients}
						className={styles.ingredients}
					/>
				)}
			</div>
		</div>
	);
};
