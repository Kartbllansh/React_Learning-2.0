import { Button } from '../Button/Button';
import styles from './styles.module.scss';
import ThumbDown from './images/thumb-down.svg';
import ThumbUp from './images/thumb-up.svg';
import { useEffect, useState } from 'react';

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish }) => {
	const [state, setState] = useState(0);

	if (!dish) {
		return null;
	}

	const { name, ingredients } = dish;

	return (
		<div>
			<span>{name}</span>
			<Button
				onClick={() => setState(state + 1)}
				type={'secondary'}
				className={styles.incrementAction}
			>
				+
			</Button>
			<Button
				onClick={() => setState(state - 1)}
				className={styles.decrementAction}
			>
				-
			</Button>

			<span> Статус:{state || 'Блюдо не выбрано'}</span>
			<ul>
				{ingredients.map(({ name, id }) => (
					<li key={id}>{name}</li>
				))}
			</ul>
		</div>
	);
};
