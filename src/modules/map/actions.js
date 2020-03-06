import {createAction} from 'redux-actions';
import {
	FETCH_ADDRESS_REQUEST,
	FETCH_ADDRESS_SUCCESS,
	FETCH_ADDRESS_FAILURE,
	FETCH_ROUTE_REQUEST,
	FETCH_ROUTE_SUCCESS,
	FETCH_ROUTE_FAILURE,
	CLEAR_ORDER,
} from './types';

export const fetchAddressRequest = createAction(FETCH_ADDRESS_REQUEST);
export const fetchAddressSuccess = createAction(FETCH_ADDRESS_SUCCESS);
export const fetchAddressFailure = createAction(FETCH_ADDRESS_FAILURE);

export const fetchRouteRequest = createAction(FETCH_ROUTE_REQUEST);
export const fetchRouteSuccess = createAction(FETCH_ROUTE_SUCCESS);
export const fetchRouteFailure = createAction(FETCH_ROUTE_FAILURE);

export const clearOrder = createAction(CLEAR_ORDER);