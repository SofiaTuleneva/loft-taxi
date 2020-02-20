import React from 'react';
import Header from '../components/Header';
import { Provider } from 'react-redux'
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store'
import {BrowserRouter} from 'react-router-dom';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
	Map: () => ({})
}));
const initialState = {};
const mockStore = configureStore();
let store;
store = mockStore(initialState);

it("Header renders correctly", () => {
	const setPage = jest.fn();

	const component = render(
		<Provider store={store}><BrowserRouter><Header
			setPage={setPage}
			activePageId={'login'}
			pages={[]}
		/></BrowserRouter></Provider>,
	);
// console.log('component', component);
// 	let tree = component.toJSON();
	expect(component).toMatchSnapshot();
});
