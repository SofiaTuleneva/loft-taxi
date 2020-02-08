import {createAction} from 'redux-actions';
import {
	PROFILE_REQUEST as profile,
	PROFILE_SUCCESS as profileSuccess,
	PROFILE_FAILURE as profileFailure,
} from './types';

export const fetchProfileRequest = createAction(profile);
export const fetchProfileSuccess = createAction(profileSuccess);
export const fetchProfileFailure = createAction(profileFailure);