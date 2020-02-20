import {
	fetchAddressRequest,
	fetchAddressSuccess,
	fetchAddressFailure,
} from "./actions";

import {handleActions} from 'redux-actions';
import {combineReducers} from "redux";

const data = handleActions(
	{
		[fetchAddressSuccess]: (state, action) => action.payload,
	},
	null
);

const pending = handleActions({
	[fetchAddressRequest]: () => true,
	[fetchAddressSuccess]: () => false,
	[fetchAddressFailure]: () => false,
}, false);

const error = handleActions({
	[fetchAddressRequest]: () => true,
	[fetchAddressSuccess]: () => false,
	[fetchAddressFailure]: () => false,
}, null);

export default combineReducers({
	data,
	pending,
	error,
});