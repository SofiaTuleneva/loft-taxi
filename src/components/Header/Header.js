import React from 'react';
import HeaderLogo from "./HeaderLogo";
import {logoutAction} from "../../modules/auth/actions";
import {useDispatch} from "react-redux";

const Header = () => {

	const dispatch = useDispatch();

	const handleLogout = e => {
		e.preventDefault();
		dispatch(logoutAction());
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header__line">
					<HeaderLogo/>
					<div className="header__menu">
						<button className="menu__item" onClick={handleLogout}>Выйти</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
