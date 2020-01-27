import React from 'react'
import PropTypes from 'prop-types'

const HeaderButton = ({handleClick, text}) => {
	return (
		<button onClick={handleClick} className="menu__item">
			{text}
		</button>
	)
};

HeaderButton.propTypes = {
	handleClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
};

export default HeaderButton;