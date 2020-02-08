import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './modules';
import {loginMiddleware, signupMiddleware} from './modules/auth';
import {profileMiddleware} from './modules/profile';
import {getStateFromStorage} from "./LocalStorage";

const initialState = getStateFromStorage();

const createAppStore = () => {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(loginMiddleware),
			applyMiddleware(signupMiddleware),
			applyMiddleware(profileMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: noop => noop,
		),
	);

	return store;
};

export default createAppStore;
