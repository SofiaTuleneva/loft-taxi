import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {
	fetchAddressesRequest,
	fetchAddressesSuccess,
	fetchAddressesFailure,
} from './actions';

const elements = handleActions(
	{
		[fetchAddressesRequest]: () => [],
		[fetchAddressesSuccess]: (_state, action) => action.payload,
	},
	[],
);

const isLoading = handleActions(
	{
		[fetchAddressesRequest]: () => true,
		[fetchAddressesSuccess]: () => false,
		[fetchAddressesFailure]: () => false,
	},
	false,
);

const error = handleActions(
	{
		[fetchAddressesRequest]: () => null,
		[fetchAddressesFailure]: (_state, action) => action.payload,
	},
	null,
);

export default combineReducers({
	elements,
	isLoading,
	error,
});