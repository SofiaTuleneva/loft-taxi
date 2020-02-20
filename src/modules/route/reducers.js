import {
	fetchAddressRequest,
	fetchAddressSuccess,
	fetchAddressFailure,
	fetchRouteRequest,
	fetchRouteSuccess,
	fetchRouteFailure,
} from "./actions";

import {handleActions} from 'redux-actions';
import {combineReducers} from "redux";

const addresses = handleActions(
	{
		[fetchAddressSuccess]: (state, action) => action.payload,
	},
	null
);

const route = handleActions(
	{
		[fetchRouteSuccess]: (state, action) => action.payload,
	},
	null
);

const pending = handleActions({
	[fetchAddressRequest]: () => true,
	[fetchAddressSuccess]: () => false,
	[fetchAddressFailure]: () => false,
	[fetchRouteRequest]: () => true,
	[fetchRouteSuccess]: () => false,
	[fetchRouteFailure]: () => false
}, false);

const error = handleActions({
	[fetchAddressRequest]: () => true,
	[fetchAddressSuccess]: () => false,
	[fetchAddressFailure]: () => false,
	[fetchRouteRequest]: () => true,
	[fetchRouteSuccess]: () => false,
	[fetchRouteFailure]: () => false
}, null);

export default combineReducers({
	addresses,
	route,
	pending,
	error,
});