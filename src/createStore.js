import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './modules';
import {authMiddleware, signupMiddleware} from './modules/auth';

const createAppStore = () => {
	const store = createStore(
		rootReducer,
		compose(
            applyMiddleware(authMiddleware),
            applyMiddleware(signupMiddleware),
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
