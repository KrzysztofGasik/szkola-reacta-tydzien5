import React, { useState, useEffect, Fragment } from 'react';

const styles = {
	button: {
		display: 'block',
		margin: '0 auto',
		border: 'none',
		borderRadius: '4px',
		fontSize: '1.2em',
		padding: '0.7em',
		backgroundColor: '#000',
		color: '#fff',
		cursor: 'pointer'
	}
};

export default function User({ name, username, email, click, allow }) {
	const [ clicked, setClick ] = useState(false);

	const clickHandler = () => {
		setClick(!clicked);
	};

	const clickAbort = () => {
		return false;
	}

	useEffect(
		() => {
			if (click) setClick(false);
		},
		[ click ]
	);

	return (
		<div onClick={allow ? clickHandler : clickAbort}>
			{clicked ? (
				<Fragment>
					<p>Name: {name}</p>
					<p>Username: {username}</p>
					<p>Email: {email}</p>
					<button onClick={clickHandler} style={styles.button}>
						Click to close
					</button>
				</Fragment>
			) : (
				<p>Name: {name}</p>
			)}
		</div>
	);
}
