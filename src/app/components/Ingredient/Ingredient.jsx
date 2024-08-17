import React, { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useAmount } from '@/hooks/useAmount';

export const Ingredient = ({ ingredient, className }) => {
	const { amount, decrement, increment } = useAmount(1);
	return (
		<div className={classNames(styles.root, className)}>
			<span className={styles.title}>{ingredient}</span>
			<div>
				<Button
					disabled={amount === 5}
					onClick={increment}
					type={'secondary'}
					className={styles.incrementAction}
				>
					+
				</Button>
				<span>{amount}</span>
				<Button
					disabled={amount === 0}
					onClick={decrement}
					className={styles.decrementAction}
				>
					-
				</Button>
			</div>
		</div>
	);
};
