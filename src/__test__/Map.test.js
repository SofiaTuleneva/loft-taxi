import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../components/Map';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
	Map: () => ({})
}));

it("Map renders correctly", () => {
	const component = renderer.create(
		<Map />,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
