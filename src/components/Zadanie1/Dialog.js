import React from 'react';

import Button from './Button';

const styles = {
	background: 'rgba(100,100,100, 0.3)',
	display: 'grid',
	placeContent: 'center',
	gap: '1em',
	padding: '1em',
	justifyItems: 'center',
	margin: '1em 0 0 0',
	transition: 'all 1s ease'
};

export default function Dialog({ title, description, handler, data }) {
	return (
		<div style={styles}>
			<p>Title: {title}</p>
			<p>Description: {description}</p>
			<Button type="confirm" label="Confirm" handler={handler} data={data} />
			<Button type="abort" label="Abort" handler={handler} data={data} />
		</div>
	);
}
