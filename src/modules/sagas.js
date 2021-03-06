import {fork, call, put, take, takeEvery} from "redux-saga/effects";

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

import {
	fetchAddressRequest,
	fetchAddressSuccess,
	fetchAddressFailure,
	fetchRouteRequest,
	fetchRouteSuccess,
	fetchRouteFailure,
} from "./map/actions";

// Requests

const PATH = 'https://loft-taxi.glitch.me';

const loginRequest = data =>
	fetch(`${PATH}/auth`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json());

const signupRequest = data =>
	fetch(`${PATH}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json());

const profileRequest = data =>
	fetch(`${PATH}/card`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json());

const profileGet = token =>
	fetch(`${PATH}/card?token=${token}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	})
		.then(response => response.json());

const addressListGet = () =>
	fetch(`${PATH}/addressList`)
		.then(response => response.json());

const routeRequest = data =>
	fetch(`${PATH}/route?address1=${data.addressOne}&address2=${data.addressTwo}`)
		.then(response => response.json());

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

function* addressesGetSaga() {
	yield takeEvery(fetchAddressRequest, function* () {
		try {
			const result = yield call(addressListGet);
			yield put(fetchAddressSuccess(result));
		} catch (e) {
			yield put(fetchAddressFailure(e));
		}
	});
}

function* routeRequestSaga() {
	while (true) {
		const action = yield take(fetchRouteRequest);
		try {
			const result = yield call(routeRequest, action.payload);
			yield put(fetchRouteSuccess({status: true, coordinates: result}));
		} catch (e) {
			yield put(fetchRouteFailure(e));
		}
	}
}

export function* rootSagas() {
	yield fork(signupSaga);
	yield fork(loginSaga);
	yield fork(profileRequestSaga);
	yield fork(profileGetSaga);
	yield fork(addressesGetSaga);
	yield fork(routeRequestSaga);
}