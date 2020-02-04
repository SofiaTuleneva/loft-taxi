import React from 'react';
import HeaderLogo from "./HeaderLogo";

const Header = () => {

	return (
		<header className="header">
			<div className="container">
				<div className="header__line">
					<HeaderLogo/>
					<div className="header__menu">
						<button className="menu__item">Выйти</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
