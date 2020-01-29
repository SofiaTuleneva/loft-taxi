import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from "react-test-renderer";
import LoginForm from '../components/Login/LoginForm';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

it("Login Form renders correctly", () => {
    const component = renderer.create(
        <LoginForm />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Login Form click submit button', () => {
    describe('with both empty fields',() => {
        it('show error message', () => {
            const {getByTestId} = render(<LoginForm />);

            fireEvent.click(getByTestId('submit-button'));

            expect(getByTestId('error-message')).toBeInTheDocument();
        })
    });

    describe('with both fulfilled inputs', () => {
        it('not show error message', () => {
            const {getByTestId, queryByTestId} = render(<LoginForm />);
            const loginField = getByTestId('login-field');
            const passwordField = getByTestId('password-field');
            fireEvent.change(loginField, {target: {value: 'test'}});
            fireEvent.change(passwordField, {target: {value: 'test'}});

            fireEvent.click(getByTestId('submit-button'));

            expect(queryByTestId('error-message')).toBeNull();
        })
    })
});

