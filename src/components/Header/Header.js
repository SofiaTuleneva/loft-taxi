import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import {AppBar, Toolbar} from "@material-ui/core";

const Header = () => {
	return (
		<div className="header">
			<AppBar color="primary" position="static" className="header__appbar" >
				<Toolbar className="header__toolbar">
					<HeaderLogo/>
					<HeaderNav/>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
