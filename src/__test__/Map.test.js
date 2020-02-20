import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../components/Map';
import configureStore from 'redux-mock-store'
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
	Map: () => ({})
}));
const initialState = {};
const mockStore = configureStore();
let store;
store = mockStore(initialState);

it("Map renders correctly", () => {
	const component = renderer.create(
		<Provider store={store}><BrowserRouter><Map /></BrowserRouter></Provider>,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
