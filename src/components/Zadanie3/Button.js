import React from 'react';

const styles={
    backgroundColor: '#082c7f',
    color: '#fcfcfc',
    fontSize: '1.3em',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '0.5em',
    border: 'none',
    display: 'block',
    margin: '0 auto',
    borderRadius: '8px'
}

export default function Button({visible, handler }) {
	const menuHandler = () => handler(!visible);

	return (
		<button style={styles} onClick={menuHandler}>
			{visible ? "Close" : "Show"} menu
		</button>
	);
}
