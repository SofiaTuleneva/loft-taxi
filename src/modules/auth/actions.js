import {createAction} from 'redux-actions';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_LOGOUT,

	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
} from './types';

export const fetchLoginRequest = createAction(LOGIN_REQUEST);
export const fetchLoginSuccess = createAction(LOGIN_SUCCESS);
export const fetchLoginFailure = createAction(LOGIN_FAILURE);
export const logoutAction = createAction(LOGIN_LOGOUT);

export const fetchSignupRequest = createAction(SIGNUP_REQUEST);
export const fetchSignupSuccess = createAction(SIGNUP_SUCCESS);
export const fetchSignupFailure = createAction(SIGNUP_FAILURE);