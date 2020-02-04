import {
    fetchAddressesRequest,
    fetchAddressesSuccess,
	fetchAddressesFailure,
} from './actions';

export const tvmazeFetchMiddleware = store => next => action => {
	if (action.type === fetchAddressesRequest.toString()) {
		fetch(`https://loft-taxi.glitch.me/addressList`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				store.dispatch(fetchAddressesSuccess(data.addresses));
			})
			.catch(error => {
				store.dispatch(fetchAddressesFailure(error));
			});
	}
	return next(action);
};
