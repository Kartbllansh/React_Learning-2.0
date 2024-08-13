import React from 'react';
import { Ingredient } from '../Ingredient/Ingredient';
import styles from './styles.module.scss';

export const Ingredients = ({ ingredients, className }) => {
	if (!ingredients?.length) {
		return null;
	}
	return (
		<ul className={className}>
			{ingredients.map(ingredient => (
				<li key={ingredient.id} className={styles.ingredient}>
					<Ingredient ingredient={ingredient.name} />
				</li>
			))}
		</ul>
	);
};
