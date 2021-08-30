import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserContainer from './UserContainer';

const styles = {
	link: {
		textDecoration: 'none',
		fontSize: '1.2em',
		textAlign: 'center',
		display: 'block',
		backgroundColor: '#082c7f',
		width: '200px',
		margin: '0 auto',
		padding: '0.4em',
		color: '#fff'
	}
}

export default function Wrapper() {
	return (
		<div>
			<p>Zadanie 4 i 5</p>
			<Router>
				<Link style={styles.link} to="/users">Go to users</Link>
				<Switch>
					<Route path="/user-profile">
						{/* <UserSelected /> */}
					</Route>
					<Route exact path="/users">
						<UserContainer />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
