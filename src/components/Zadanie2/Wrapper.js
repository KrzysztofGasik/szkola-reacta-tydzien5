import React, { useState } from 'react';

import Snackbar from './Snackbar';

const styles = {
	display: 'flex',
	justifyContent: 'center',
	margin: '1em',
	flexFlow: 'column',
	alignItems: 'center',
	button: {
		backgroundColor: 'navy',
		color: '#fff',
		padding: '1em',
		border: 'none',
		borderRadius: '7px',
		fontSize: '1.4em',
		cursor: 'pointer'
	}
};

export default function Wrapper() {
	const [ toggle, setSnackbarDisplay ] = useState(false);
	const snackbarHandler = () => {
		setSnackbarDisplay(!toggle);
	};

	return (
		<div style={styles}>
			<button onClick={snackbarHandler} style={styles.button}>
				Open snackbar
			</button>
			{toggle ? <Snackbar time="25" show={toggle} handler={snackbarHandler} position="bottom-right" /> : null}
		</div>
	);
}
