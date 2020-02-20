import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {paths} from './constants/Paths';

// Styles
import './scss/App.scss';

// Theme
import {ThemeProvider} from '@material-ui/core';
import {theme} from 'loft-taxi-mui-theme';

// Components
import Login from './components/Login';
import Map from './components/Map';
import Profile from './components/Profile';
import Signup from './components/Signup';
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileGet} from "./modules/profile";
import {fetchAddressRequest} from "./modules/map";

const App = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		if (state.auth.isLoggedIn) {
			dispatch(fetchAddressRequest());
			dispatch(fetchProfileGet({
				token: state.auth.token,
			}));
		}
	}, []);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Switch>
					<PrivateRoute exact path={paths.map} component={Map}/>
					<PrivateRoute exact path={paths.profile} component={Profile}/>
					<Route path={paths.login} component={Login}/>
					<Route path={paths.signup} component={Signup}/>
					<Redirect to={paths.map}/>
				</Switch>
			</ThemeProvider>
		</div>
	);
};

export default App;