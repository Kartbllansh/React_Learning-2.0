import { useCallback, useState } from 'react';

export const useAmount = (initialState = 0) => {
	const [amount, setAmount] = useState(initialState);
	const decrement = useCallback(
		() => setAmount(currentAmount => currentAmount - 1),
		[]
	);
	const increment = useCallback(
		() => setAmount(currentAmount => currentAmount + 1),
		[]
	);
	return { amount, decrement, increment };
};
