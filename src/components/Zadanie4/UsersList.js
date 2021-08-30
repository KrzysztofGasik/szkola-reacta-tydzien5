import React from 'react';

import User from './User';
import UserSearch from './UserSearch';

export default function UsersList({ data, handler, reset }) {
	const resetClick = data.length > 1;
	const allowClick = data.length === 1;

	return (
		<div>
			<UserSearch handler={handler} data={data} reset={reset} />
			<p>User list: </p>
			<ul>
				{data.map((user) => {
					const { id, name, username, email } = user;
					return <User key={`id-${id}`} name={name} username={username} email={email} click={resetClick} allow={allowClick}/>;
				})}
			</ul>
		</div>
	);
}
