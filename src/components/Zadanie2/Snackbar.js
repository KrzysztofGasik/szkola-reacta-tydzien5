import React, { useEffect } from 'react';

const styles = {
	backgroundColor: '#ff9800',
	color: '#fff',
	position: 'absolute',
	padding: '1em',
	topLeft: {
		top: '0%',
		left: '0%'
	},
	topCenter: {
		top: '0%',
		left: '50%'
	},
	topRight: {
		top: '0%',
		left: '90%'
	},
	bottomLeft: {
		top: '90%',
		left: '0%'
	},
	bottomCenter: {
		top: '90%',
		left: '50%'
	},
	bottomRight: {
		top: '90%',
		left: '90%'
	}
};

export default function Snackbar({ time, show, handler, position }) {
	function setPosition(position) {
		const positionPattern = [
			{
				'top-left': styles.topLeft
			},
            {
				'top-center': styles.topCenter
			},
            {
				'top-right': styles.topRight
			},
            {
				'bottom-left': styles.bottomLeft
			},
            {
				'bottom-center': styles.bottomCenter
			},
            {
				'bottom-right': styles.bottomRight
			}
		];
        let obj
        positionPattern.forEach(el=>{
            let key = Object.keys(el);
            let value = Object.values(el);
            if (key[0]=== position) {
                obj = value[0];
                return value;
            }
        })
        return obj;
	}

    const propsPosition = setPosition(position);

	useEffect(() => {
		const timer = setTimeout(() => {
			handler(!show);
		}, time * 1000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return <div style={{ ...styles, ...propsPosition }}>Snackbar</div>;
}
