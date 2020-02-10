import {PROFILE_SAVE, PROFILE_GET} from "./types";
import {
	fetchProfileSuccess,
	fetchProfileFailure,
} from "./actions";

export const profileSaveMiddleware = store => next => action => {
	if (action.type === PROFILE_SAVE) {
		fetch(`https://loft-taxi.glitch.me/card`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(action.payload),
		})
			.then(response => response.json())
			.then(data => store.dispatch(fetchProfileSuccess(Object.assign(data, action.payload))))
			.catch(error => store.dispatch(fetchProfileFailure(error)))
	}
	return next(action);
};


export const profileGetMiddleware = store => next => action => {
	if (action.type === PROFILE_GET) {
		fetch(`https://loft-taxi.glitch.me/card?token=${action.payload.token}`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then(data => store.dispatch(fetchProfileSuccess(data)))
			.catch(error => store.dispatch(fetchProfileFailure(error)))
	}
	return next(action);
};