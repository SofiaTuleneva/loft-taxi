import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import UserContext from "../../context/UserContext";
import HeaderLogo from "./HeaderLogo";
import HeaderButton from "./HeaderButton";

const Header = ({pages, setPage}) => {

	// Context
	const user = useContext(UserContext);

	const handleMenuClick = (e, activePageId) => {
		e.preventDefault();
		setPage(activePageId)
	};

	const handleLogout = e => {
		e.preventDefault();
		user.logout();
	};

	const pagesFiltered = pages.filter(
		({showInMenu}) => showInMenu === user.isLoggedIn
	);

	return (
		<header className="header">
			<div className="container">
				<div className="header__line">
					<HeaderLogo/>
					<div className="header__menu">
						{pagesFiltered.map(({id, text}) => (
							<HeaderButton
								key={id}
								text={text}
								handleClick={e => handleMenuClick(e, id)}
							/>
						))}
						<button onClick={handleLogout} className="menu__item">Выйти</button>
					</div>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	pages: PropTypes.array.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default Header;
