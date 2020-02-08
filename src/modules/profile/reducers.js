import {
	fetchProfileFailure,
	fetchProfileRequest,
	fetchProfileSuccess,
} from "./actions";

import {handleActions} from 'redux-actions';
import {combineReducers} from "redux";

const isSaved = handleActions({
	[fetchProfileSuccess]: (state, action) => action.payload.success,
}, false);

const pending = handleActions({
	[fetchProfileRequest]: () => true,
	[fetchProfileSuccess]: () => false,
	[fetchProfileFailure]: () => false,
}, false);

const error = handleActions({
	[fetchProfileFailure]: (state, action) => action.payload,
	[fetchProfileRequest]: () => null,
}, null);

export default combineReducers({
	isSaved,
	pending,
	error,
});