import {createAction} from 'redux-actions';
import {
	AUTH_REQUEST as auth,
	AUTH_SUCCESS as success,
	AUTH_FAILURE as failure,
	AUTH_LOGOUT as logout,
} from './types';

export const fetchAuthRequest = createAction(auth);
export const fetchAuthSuccess = createAction(success);
export const fetchAuthFailure = createAction(failure);
export const logoutAction = createAction(logout);