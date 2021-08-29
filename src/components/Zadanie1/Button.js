import React from 'react';

const styles = {
	abort: {
		backgroundColor: 'red',
		border: 'none',
		padding: '1em',
		fontSize: '1.2em',
		color: '#fff',
		borderRadius: '5px',
		cursor: 'pointer'
	},
	confirm: {
		backgroundColor: 'green',
		border: 'none',
		padding: '1em',
		fontSize: '1.2em',
		color: '#fff',
		borderRadius: '5px',
		cursor: 'pointer'
	}
};

export default function Button({ label, type, handler, data }) {
	const buttonType = type === 'confirm' ? styles.confirm : styles.abort;

	const toggleData = () => {
		handler(!data);
	};
	return (
		<div>
			<button style={buttonType} onClick={toggleData}>
				{label}
			</button>
		</div>
	);
}
