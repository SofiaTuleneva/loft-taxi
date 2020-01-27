import React from 'react';

import {
	Button,
	TextField,
} from '@material-ui/core';

const SignUp = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h1>Регистрация</h1>

			<form onSubmit={handleSubmit}>
				<div><TextField label="Email*" name='email' type="email"/></div>
				<div><TextField label="Имя" name='name' type="text"/></div>
				<div><TextField label="Фaмилия" name='lastname' type="text"/></div>
				<div><TextField label="Пароль*" name='password' type="password"/></div>
				<div>
					<Button type="submit" variant="contained" color="primary">
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</div>
	)
};

export default SignUp;