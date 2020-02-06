import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__line">
					<HeaderLogo/>
					<HeaderNav/>
				</div>
			</div>
		</header>
	);
};

export default Header;
