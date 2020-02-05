import React from 'react';
import AuthWrapper from '../Shared/AuthWrapper';
import LoginForm from './LoginForm';

const Login = () => {
	return (
		<AuthWrapper>
			<LoginForm/>
		</AuthWrapper>
	);
};

export default Login;