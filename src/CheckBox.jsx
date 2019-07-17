import React from 'react';

const CheckBox = props => {
	return (
		<div style={props.style}>
			<label>
				<input type={props.type} onChange={props.onChange} defaultChecked={props.defaultChecked} />
				{props.name}
			</label>
		</div>
	);
};

export default CheckBox;
