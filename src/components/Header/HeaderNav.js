import React from 'react';
import {logoutAction} from "../../modules/auth/actions";
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {paths} from '../../constants/Paths';

const HeaderNav = () => {

	const dispatch = useDispatch();

	const handleLogout = e => {
		e.preventDefault();
		dispatch(logoutAction());
	};

	return (
		<>
			<ul className="header__menu">
				<li className="menu__item"><Link to={paths.map}>Карта</Link></li>
				<li className="menu__item"><Link to={paths.profile}>Профиль</Link></li>
				<li className="menu__item"><a href="/" onClick={handleLogout}>Выйти</a></li>
			</ul>
		</>
	);
};

export default HeaderNav;