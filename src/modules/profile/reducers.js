import {
	fetchProfileFailure,
	fetchProfileRequest,
	fetchProfileSuccess,
	fetchProfileGet,
} from "./actions";

import {handleActions} from 'redux-actions';
import {combineReducers} from "redux";

const data = handleActions({
	[fetchProfileSuccess]: (state, action) => action.payload,
}, false);

const pending = handleActions({
	[fetchProfileRequest]: () => true,
	[fetchProfileGet]: () => true,
	[fetchProfileSuccess]: () => false,
	[fetchProfileFailure]: () => false,
}, false);

const error = handleActions({
	[fetchProfileFailure]: (state, action) => action.payload,
	[fetchProfileRequest]: () => null,
}, null);

export default combineReducers({
	data,
	pending,
	error,
});