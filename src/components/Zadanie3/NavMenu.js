import React from 'react';

const styles = {
	display: 'flex',
	alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#ef8068',
    width: '20vw',
	menu: {
		listStyleType: 'none',
        padding: '0.1em',
	},
	menuEl: {
		padding: '0.5em',
        color: '#ab221d',
        cursor: 'pointer'
	},
	button: {
		padding: '0.2em',
		margin: '1em',
        border: 'none',
        backgroundColor: '#e25141',
        color: '#fff',
        fontSize: '1.1em',
        fontWeight: 'bold',
        borderRadius: '1em',
        cursor: 'pointer'
	}
};

export default function NavMenu({ visible, handler }) {
	const menuHandler = () => handler(!visible);
	return (
		<div style={styles}>
			<ul style={styles.menu}>
				<li style={styles.menuEl}>Home</li>
				<li style={styles.menuEl}>About</li>
				<li style={styles.menuEl}>Contact</li>
			</ul>
			<button onClick={menuHandler} style={styles.button}>X</button>
		</div>
	);
}
