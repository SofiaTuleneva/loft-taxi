import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
	Map: () => ({})
}));

it("Header renders correctly", () => {
	const setPage = jest.fn();
	const component = renderer.create(
		<Header
			setPage={setPage}
			activePageId={'login'}
			pages={[]}
		/>,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
