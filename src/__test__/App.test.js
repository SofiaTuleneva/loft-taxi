import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import configureStore from 'redux-mock-store'
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
	Map: () => ({})
}));
const initialState = {auth: {isLoggedIn: false}};
const mockStore = configureStore();
let store;
store = mockStore(initialState);

it("App renders correctly", () => {
	const component = renderer.create(
		<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
