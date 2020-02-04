import {createSelector} from 'reselect';

export const getIsLoading = state => state.addresses.isLoading;
export const getError = state => state.addresses.error;
export const getAddresses = createSelector(
	state => state.addresses.elements,
	elements =>
		elements.map((item) => (
			item
		)),
);
