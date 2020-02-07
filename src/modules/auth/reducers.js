import {
	fetchLoginFailure,
	fetchLoginRequest,
	fetchLoginSuccess,
	logoutAction,

	fetchSignupRequest,
	fetchSignupSuccess,
	fetchSignupFailure,
} from "./actions";

import {handleActions} from 'redux-actions';
import {combineReducers} from "redux";

const isLoggedIn = handleActions({
	[fetchLoginSuccess]: (state, action) => action.payload.success,
	[logoutAction]: () => false,

	[fetchSignupSuccess]: (state, action) => action.payload.success,
}, false);

const pending = handleActions({
	[fetchLoginRequest]: () => true,
	[fetchLoginSuccess]: () => false,
	[fetchLoginFailure]: () => false,

	[fetchSignupRequest]: () => true,
	[fetchSignupSuccess]: () => false,
	[fetchSignupFailure]: () => false,
}, false);

const error = handleActions({
	[fetchLoginFailure]: (state, action) => action.payload,
	[fetchLoginRequest]: () => null,

	[fetchSignupFailure]: (state, action) => action.payload,
	[fetchSignupRequest]: () => null,
}, null);

export default combineReducers({
	isLoggedIn,
	pending,
	error,
});
