import {LOGIN_REQUEST} from "./types";
import {SIGNUP_REQUEST} from "./types";
import {
	fetchLoginSuccess,
	fetchLoginFailure,

	fetchSignupSuccess,
	fetchSignupFailure,
} from "./actions";

export const loginMiddleware = store => next => action => {
	if (action.type === LOGIN_REQUEST) {
		fetch(`https://loft-taxi.glitch.me/auth`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(action.payload),
		})
			.then(response => response.json())
			.then(data => store.dispatch(fetchLoginSuccess(data)))
			.catch(error => store.dispatch(fetchLoginFailure(error)))
	}
	return next(action);
};

export const signupMiddleware = store => next => action => {
	if (action.type === SIGNUP_REQUEST) {
		fetch(`https://loft-taxi.glitch.me/register`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(action.payload),
		})
			.then(response => response.json())
			.then(data => store.dispatch(fetchSignupSuccess(data)))
			.catch(error => store.dispatch(fetchSignupFailure(error)))
	}
	return next(action);
};