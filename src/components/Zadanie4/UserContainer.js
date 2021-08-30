import React, { useState, useEffect } from 'react';

import UsersList from './UsersList';

export default function UserContainer() {
	const [ users, setUsers ] = useState([]);

	const getData = async () => {
		const res = await fetch('users.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});
		const data = await res.json();
		setUsers(data);
	};

	useEffect(() => {
        getData();
        return ()=>{
            getData();
        }
    },[]);

	return (
		<div>
			{users ? <UsersList data={users} handler={setUsers} reset={getData}/> : <div>Loading users, please wait...</div>}
		</div>
	);
}
