import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
	Map: () => ({})
}));

it("App renders correctly", () => {
	const component = renderer.create(
		<App />,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
