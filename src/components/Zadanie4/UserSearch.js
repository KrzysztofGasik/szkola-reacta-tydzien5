import React from 'react';

const styles = {
	display: 'flex',
	flexFlow: 'column wrap',
	alignItems: 'center',
    input: {
        padding: '1em',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
    }
};

export default function UserSearch({ data, handler, reset }) {

	const changeHandler = (e) => {
		e.preventDefault();
		const { value } = e.target;
		if (e.key === 'Enter' && value !== '') {
			const copyUsers = [ ...data ];
			const list = copyUsers.filter((val) => val.name.includes(value));
			if (list.length > 0) handler(list);
		} else if (e.key === 'Escape') {
			reset();
			e.target.value = '';
		}
	};

	return (
		<div style={styles}>
			<p>For search type query and press Enter, for reset focus on input and press Escape</p>
			<input type="text" onKeyUp={changeHandler} style={styles.input}/>
		</div>
	);
}
