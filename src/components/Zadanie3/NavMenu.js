import React from 'react';

import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';

const styles = {
	display: 'flex',
	alignItems: 'flex-start',
	justifyContent: 'space-between',
	backgroundColor: '#ef8068',
	width: '20vw',
	menu: {
		listStyleType: 'none',
		padding: '0.1em'
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
		<Router>
			<div style={styles}>
				<ul style={styles.menu}>
					<li style={styles.menuEl}>
						<NavLink to="/" exact>
							Home
						</NavLink>
					</li>
					<li style={styles.menuEl}>
						<NavLink to="/about">About</NavLink>
					</li>
					<li style={styles.menuEl}>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
				<button onClick={menuHandler} style={styles.button}>
					X
				</button>
			</div>
			<Switch >
				<Route path="/about">
					<About/>
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
