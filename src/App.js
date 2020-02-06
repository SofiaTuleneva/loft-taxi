import React, {PureComponent} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

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

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				<ThemeProvider theme={theme}>
					<>
						<Switch>
							<PrivateRoute exact path="/map" component={Map}/>
							<PrivateRoute exact path="/profile" component={Profile}/>
							<Route path="/login" component={Login}/>
							<Route path="/signup" component={Signup}/>
							<Redirect to="/map"/>
						</Switch>
					</>

				</ThemeProvider>
			</div>
		);
	}
}

export default App;