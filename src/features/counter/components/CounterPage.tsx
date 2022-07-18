import { useState } from 'react';

import './index.css';

export const CounterPage = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div className='CounterPage'>
			<div className='card'>
				<h2>Count: {count} </h2>
				<button onClick={() => setCount(count => count + 1)}>+</button>
				<button onClick={() => setCount(0)}>Reset</button>
				<button
					onClick={() => setCount(count => count - 1)}
					disabled={count < 1}
				>
					-
				</button>
			</div>
		</div>
	);
};
