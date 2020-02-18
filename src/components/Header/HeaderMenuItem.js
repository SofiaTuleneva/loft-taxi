import React from 'react'
import PropTypes from 'prop-types'

const HeaderMenuItem = ({handleClick, text}) => {
	return (
		<button onClick={handleClick} className="menu__item">
			{text}
		</button>
	)
};

HeaderMenuItem.propTypes = {
	handleClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
};

export default HeaderMenuItem;