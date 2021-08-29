import React, { useState } from 'react';

import Dialog from './Dialog';

const styles = {
	display: 'grid',
	placeContent: 'center',
	button: {
		padding: '1em',
		margin: '1em 0',
		backgroundColor: '#000',
		color: '#fff',
		fontSize: '1.2em',
		border: 'none',
		cursor: 'pointer'
	}
};

export default function Wrapper() {
	const [ dialog, setDialogVisibility ] = useState(false);

	const toggle = () => {
		setDialogVisibility(!dialog);
	};

	return (
		<div style={styles}>
			<p>Zadanie 1</p>
			<button onClick={toggle} style={styles.button}>
				Toggle visibility of dialog window
			</button>
			{dialog ? (
				<Dialog
					title="Custom title"
					description="Custom description"
					handler={setDialogVisibility}
					data={dialog}
				/>
			) : null}
		</div>
	);
}
