import {createStore, compose, applyMiddleware} from 'redux';

import createSagaMiddleWare from 'redux-saga';
import {rootSagas} from './modules/sagas';
import rootReducer from './modules';

import {getStateFromStorage} from "./LocalStorage";

const sagaMiddleware = createSagaMiddleWare();
const initialState = getStateFromStorage();

const createAppStore = () => {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: noop => noop,
		),
	);

	sagaMiddleware.run(rootSagas);

	return store;
};

export default createAppStore;
