import {fork, call, put, take} from "redux-saga/effects";

import {
	fetchLoginRequest,
	fetchLoginSuccess,
	fetchLoginFailure,
	fetchSignupRequest,
	fetchSignupSuccess,
	fetchSignupFailure,
} from "./auth/actions";

import {
	fetchProfileRequest,
	fetchProfileSuccess,
	fetchProfileFailure,
	fetchProfileGet,
} from "./profile/actions";

const PATH = 'https://loft-taxi.glitch.me';

const loginRequest = data =>
	fetch(`${PATH}/auth`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
	}).then(response => response.json());

const signupRequest = data =>
	fetch(`${PATH}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
	}).then(response => response.json());

const profileRequest = data =>
	fetch(`${PATH}/card`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
	}).then(response => response.json());

const profileGet = token =>
	fetch(`${PATH}/card?token=${token}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	}).then(response => response.json());


// Sagas

function* loginSaga() {

	while (true) {
		const action = yield take(fetchLoginRequest);
		try {
			const result = yield call(loginRequest, action.payload);
			result.success
				? yield put(fetchLoginSuccess(result))
				: yield put(fetchLoginFailure(result));
		} catch (e) {
			yield put(fetchLoginFailure(e));
		}
	}
}

function* signupSaga() {
	while (true) {
		const action = yield take(fetchSignupRequest);
		try {
			const result = yield call(signupRequest, action.payload);
			result.success
				? yield put(fetchSignupSuccess(result))
				: yield put(fetchSignupFailure(result));
		} catch (e) {
			yield put(fetchSignupFailure(e));
		}
	}
}

function* profileRequestSaga() {
	while (true) {
		const action = yield take(fetchProfileRequest);
		try {
			const result = yield call(profileRequest, action.payload);
			result.success
				? yield put(fetchProfileSuccess(Object.assign(result, action.payload)))
				: yield put(fetchProfileFailure(result));
		} catch (e) {
			yield put(fetchProfileFailure(e));
		}
	}
}

function* profileGetSaga() {
	while (true) {
		const action = yield take(fetchProfileGet);
		try {
			const result = yield call(profileGet, action.payload.token);
			result
				? yield put(fetchProfileSuccess(result))
				: yield put(fetchProfileFailure(result));
		} catch (e) {
			yield put(fetchProfileFailure(e));
		}
	}
}

export function* rootSagas() {
	yield fork(signupSaga);
	yield fork(loginSaga);
	yield fork(profileRequestSaga);
	yield fork(profileGetSaga);
}