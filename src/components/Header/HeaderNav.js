import React from 'react';
import {logoutAction} from "../../modules/auth/actions";
import {useDispatch} from "react-redux";
import {paths} from '../../constants/Paths';
import {Button} from "@material-ui/core";

const HeaderNav = () => {
	const dispatch = useDispatch();

	const handleLogout = e => {
		e.preventDefault();
		dispatch(logoutAction());
	};

	return (
		<div>
			<Button href={paths.map}>Карта</Button>
			<Button href={paths.profile}>Профиль</Button>
			<Button onClick={handleLogout}>Выйти</Button>
		</div>
	);
};

export default HeaderNav;