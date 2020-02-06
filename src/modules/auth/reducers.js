import {
	fetchAuthFailure,
	fetchAuthRequest,
	fetchAuthSuccess,
	logoutAction,
} from "./actions";

import {handleActions} from 'redux-actions';
import {combineReducers} from "redux";

const isLoggedIn = handleActions({
	[fetchAuthSuccess]: () => true,
	// [fetchAuthSuccess]: (state, action) => action.payload.success,
	[logoutAction]: () => false,
}, false);

const pending = handleActions({
	[fetchAuthRequest]: () => true,
	[fetchAuthSuccess]: () => false,
	[fetchAuthFailure]: () => false,
}, false);

const error = handleActions({
	[fetchAuthFailure]: (state, action) => action.payload,
	[fetchAuthRequest]: () => null,
}, null);

export default combineReducers({
	isLoggedIn,
	pending,
	error,
});
