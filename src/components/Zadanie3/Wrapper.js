import React, { useState } from 'react';

import NavMenu from './NavMenu';
import Button from './Button';

const styles = {

	button: {
		display: 'block',
		margin: '0 auto'
	}
};

export default function Wrapper() {
	const [ toggle, setMenu ] = useState(false);

	const toggleHandler = () => setMenu(!toggle);

	return (
		<div>
            <p>Zadanie 3</p>
			{toggle ? <NavMenu visible={toggle} handler={toggleHandler} /> : null}
			<Button visible={toggle} handler={toggleHandler} />
		</div>
	);
}
