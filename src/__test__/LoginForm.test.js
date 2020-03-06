import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from "react-test-renderer";
import LoginForm from '../components/Login/LoginForm';
import configureStore from 'redux-mock-store'
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

const initialState = {auth: {isLoggedIn: false, error: null}};
const mockStore = configureStore();
let store;
store = mockStore(initialState);

it("Login Form renders correctly", () => {
    const component = renderer.create(
        <Provider store={store}><BrowserRouter><LoginForm /></BrowserRouter></Provider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// describe('Login Form click submit button', () => {
//     describe('with both empty fields',() => {
//         it('show error message', () => {
//             const {getByTestId} = render(<Provider store={store}><BrowserRouter><LoginForm /></BrowserRouter></Provider>);
//
//             fireEvent.click(getByTestId('submit-button'));
//
//             expect(getByTestId('error-message')).toBeInTheDocument();
//         })
//     });
//
//     describe('with both fulfilled inputs', () => {
//         it('not show error message', () => {
//             const {getByTestId, queryByTestId} = render(<Provider store={store}><BrowserRouter><LoginForm /></BrowserRouter></Provider>);
//             const loginField = getByTestId('login-field');
//             const passwordField = getByTestId('password-field');
//             fireEvent.change(loginField, {target: {value: 'sonjareds@yandex.ru'}});
//             fireEvent.change(passwordField, {target: {value: '123'}});
//
//             fireEvent.click(getByTestId('submit-button'));
//
//             expect(queryByTestId('error-message')).toBeNull();
//         })
//     })
// });

