import {createAction} from 'redux-actions';
import {
	LOGIN_REQUEST as login,
	LOGIN_SUCCESS as loginSuccess,
	LOGIN_FAILURE as loginFailure,
	LOGIN_LOGOUT as logout,

	SIGNUP_REQUEST as signup,
	SIGNUP_SUCCESS as signupSuccess,
	SIGNUP_FAILURE as signupFailure,
} from './types';

export const fetchLoginRequest = createAction(login);
export const fetchLoginSuccess = createAction(loginSuccess);
export const fetchLoginFailure = createAction(loginFailure);
export const logoutAction = createAction(logout);

export const fetchSignupRequest = createAction(signup);
export const fetchSignupSuccess = createAction(signupSuccess);
export const fetchSignupFailure = createAction(signupFailure);