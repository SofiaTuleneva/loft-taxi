import React from 'react';

import {
	Button,
	TextField,
} from '@material-ui/core';

const SignupForm = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="login__form">
				<h1 className="form__title">Регистрация</h1>

				<div><TextField label="Email*" name='email' type="email"/></div>
				<div><TextField label="Имя" name='name' type="text"/></div>
				<div><TextField label="Фaмилия" name='lastname' type="text"/></div>
				<div><TextField label="Пароль*" name='password' type="password"/></div>
				<br/>
				<div className="button__group">
					<Button type="submit" variant="contained" color="primary">
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</div>
	)
};

export default SignupForm;