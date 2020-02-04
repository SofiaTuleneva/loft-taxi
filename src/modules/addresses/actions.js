import { createAction } from 'redux-actions';

export const fetchAddressesRequest = createAction('FETCH_ADDRESSES_REQUEST');
export const fetchAddressesSuccess = createAction('FETCH_ADDRESSES_SUCCESS');
export const fetchAddressesFailure = createAction('FETCH_ADDRESSES_FAILURE');

// getAddressesRequest.toString(); // GET_ADDRESSES_REQUEST
// getAddressesRequest(123); // { type: "GET_ADDRESSES_REQUEST", payload: 123 }
