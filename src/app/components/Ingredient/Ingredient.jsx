import React, { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Ingredient = ({ ingredient, className }) => {
	const [state, setState] = useState(1);
	const decrement = () => setState(state - 1);
	const increment = () => setState(state + 1);
	return (
		<div className={classNames(styles.root, className)}>
			<span className={styles.title}>{ingredient}</span>
			<div>
				<Button
					disabled={state === 5}
					onClick={increment}
					type={'secondary'}
					className={styles.incrementAction}
				>
					+
				</Button>
				<span>{state}</span>
				<Button
					disabled={state === 0}
					onClick={decrement}
					className={styles.decrementAction}
				>
					-
				</Button>
			</div>
		</div>
	);
};
