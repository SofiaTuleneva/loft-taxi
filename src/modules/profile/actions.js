import {createAction} from 'redux-actions';
import {
	PROFILE_SAVE,
	PROFILE_GET,
	PROFILE_SUCCESS,
	PROFILE_FAILURE,
} from './types';

export const fetchProfileRequest = createAction(PROFILE_SAVE);
export const fetchProfileGet = createAction(PROFILE_GET);
export const fetchProfileSuccess = createAction(PROFILE_SUCCESS);
export const fetchProfileFailure = createAction(PROFILE_FAILURE);