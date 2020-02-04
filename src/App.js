import React, {PureComponent} from 'react';
import UserContext from "./context/UserContext";
import {connect} from 'react-redux';

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

import {
	getAddresses,
	getIsLoading,
	getError,
	fetchAddressesRequest,
} from './modules/addresses/';

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

class App extends PureComponent {

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

	componentDidMount() {
		const {fetchAddressesRequest} = this.props;
		fetchAddressesRequest(180);
	}

	render() {

		const {addresses, isLoading, error} = this.props;

		if (isLoading) return <p>Данные загружаются...</p>;
		if (error) return <p>Произошла сетевая ошибка</p>;

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

						{/*Adresses*/}
						{addresses.length &&
						addresses.map((item, i) => (
							<div key={i}>
								Пункт прибытия {i + 1}: {item}
							</div>
						))}

						{pageContent}

					</UserContext.Provider>
				</ThemeProvider>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	addresses: getAddresses(state),
	isLoading: getIsLoading(state),
	error: getError(state),
});
const mapDispatchToProps = {fetchAddressesRequest};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
