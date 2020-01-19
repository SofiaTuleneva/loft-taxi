import React from 'react';

class Input extends React.Component {
	render() {
		return (
			<label>
				<div>{`${this.props.descript}`}</div>
				<input type={`${this.props.type}`}/>
			</label>
		)
	}
}

export default Input;