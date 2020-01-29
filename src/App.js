import React from 'react';
import UserContext from "./context/UserContext";

// Styles
import './scss/App.scss';

// Theme
import {ThemeProvider} from '@material-ui/core';
import {theme} from 'loft-taxi-mui-theme';

// Components
import Header from './components/Header';
import Login from './components/Login';
import Map from './components/Map';
import Profile from './components/Profile';
import Signup from './components/Signup';

const PAGES = [
	{
		id: 'map',
		text: 'Карта',
		component: <Map/>,
		showInMenu: true
	},
	{
		id: 'profile',
		text: 'Профиль',
		component: <Profile/>,
		showInMenu: true
	},
	{
		id: 'login',
		text: 'Вход',
		component: <Login/>,
		showInMenu: false
	},
	{
		id: 'signup',
		text: 'Регистрация',
		component: <Signup/>,
		showInMenu: false
	},
];

class App extends React.Component {

	// State
	state = {
		activePageId: 'login',
		isLoggedIn: false,
	};

	setPage = activePageId => {
		this.setState({activePageId});
	};

	getPageData = () => {
		return PAGES.find(({id}) => id === this.state.activePageId);
	};

	login = (login, password) => {
		this.setState({isLoggedIn: true});
		this.setPage("map");
	};

	logout = () => {
		this.setState({isLoggedIn: false});
		this.setPage("login");
	};

	render() {

		const pageContent = this.getPageData().component;

		return (
			<div className="App">
				<ThemeProvider theme={theme}>
					<UserContext.Provider
						value={{
							login: this.login,
							logout: this.logout,
							isLoggedIn: this.state.isLoggedIn,
						}}
					>
						{this.state.isLoggedIn &&
						<Header
							pages={PAGES}
							activePageId={this.state.activePageId}
							setPage={this.setPage}
						/>
						}
						{pageContent}
					</UserContext.Provider>
				</ThemeProvider>
			</div>
		);
	}
}

export default App;