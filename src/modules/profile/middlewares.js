import {PROFILE_REQUEST} from "./types";
import {
	fetchProfileSuccess,
	fetchProfileFailure,
} from "./actions";

export const profileMiddleware = store => next => action => {
	if (action.type === PROFILE_REQUEST) {
		fetch(`https://loft-taxi.glitch.me/card`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(action.payload),
		})
			.then(response => response.json())
			.then(data => store.dispatch(fetchProfileSuccess(data)))
			.catch(error => store.dispatch(fetchProfileFailure(error)))
	}
	return next(action);
};