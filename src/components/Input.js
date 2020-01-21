import React from 'react';

const Input = ({description, type}) => (
	<label>
		<div>{description}</div>
		<input type={type}/>
	</label>
);

export default Input;