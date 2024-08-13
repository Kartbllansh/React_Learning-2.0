import { Button } from '../Button/Button';
import styles from './styles.module.scss';
import ThumbDown from './images/thumb-down.svg';
import ThumbUp from './images/thumb-up.svg';
import { useEffect, useState } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish }) => {
	const [state, setState] = useState(0);
	const decrement = () => setState(state - 1);
	const increment = () => setState(state + 1);

	if (!dish) {
		return null;
	}

	const { name, ingredients } = dish;

	return (
		<div>
			<div className={styles.mainInfo}>
				<span className={styles.title}>{name}</span>
				<Button
					disabled={state === 5}
					onClick={increment}
					type={'secondary'}
					className={styles.incrementAction}
				>
					+
				</Button>
				<Button
					onClick={decrement}
					className={styles.decrementAction}
					disabled={state === 0}
				>
					-
				</Button>

				<span> Статус:{state || 'Блюдо не выбрано'}</span>
			</div>
			<div>
				{state > 0 && (
					<Ingredients
						ingredients={ingredients}
						className={styles.ingredients}
					/>
				)}
			</div>
		</div>
	);
};
