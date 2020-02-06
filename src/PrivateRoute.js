import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {paths} from './constants/Paths';

const PrivateRoute = ({component: Component, ...rest}) => {

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

	return <Route
		{...rest}
		render={props =>
			isLoggedIn ? <Component {...props} /> : <Redirect to={paths.signup}/>
		}
	/>
};

export default PrivateRoute;