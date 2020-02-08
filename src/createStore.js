import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './modules';
import {authMiddleware, signupMiddleware} from './modules/auth';
import {profileMiddleware} from './modules/profile';

const createAppStore = () => {
	const store = createStore(
		rootReducer,
		compose(
            applyMiddleware(authMiddleware),
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

// state0 ->  reducers -> state1
//              ↑
//            middleware1
//              ↑
//            middleware0
//              ↑
// action ->  store
