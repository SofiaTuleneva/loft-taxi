import {AUTH_REQUEST as auth} from "./types";
import {
	fetchAuthSuccess,
	fetchAuthFailure
} from "./actions";

export const authMiddleware = store => next => action => {
	if (action.type === auth) {
		fetch(`https://loft-taxi.glitch.me/auth`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(action.payload),
		})
			.then(response => response.json())
			.then(data => store.dispatch(fetchAuthSuccess(data)))
			.catch(error => store.dispatch(fetchAuthFailure(error)))
	}
	return next(action);
};