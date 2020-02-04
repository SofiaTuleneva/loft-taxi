import React, {useState, useCallback, useContext} from 'react';
import UserContext from "../../context/UserContext";

import {
	Button,
	FormControl,
	InputLabel,
	Input
} from '@material-ui/core';

const LoginForm = () => {

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setError] = useState(false);

	// Context
	const user = useContext(UserContext);

	const handleSubmit = e => {
		e.preventDefault();
		if (login && password) {
			if (user) user.login(login, password);
		} else {
			setError(true);
		}
	};

	const handleChange = useCallback(
		({target}) => {
			setError(false);
			if (target.name === "login") {
				setLogin(target.value);
			} else {
				setPassword(target.value);
			}
		},
		[setLogin, setPassword]
	);

	return (
		<div>
			<form onSubmit={handleSubmit} className="login__form">
				<h1 className="form__title">Войти</h1>

				<div className="form__subtitle">
					Новый пользователь? <a href="/signup" className="form__link">Зарегистрируйтесь</a>
				</div>

				<div className="input__group">
					<FormControl fullWidth>
						<InputLabel htmlFor="login">Login:</InputLabel>
						<Input id="login"
							   placeholder="Логин"
							   type="text"
							   name="login"
							   value={login}
							   onChange={handleChange}
							   inputProps={{'data-testid': 'login-field'}}
						/>
					</FormControl>
				</div>

				<div className="input__group">
					<FormControl fullWidth>
						<InputLabel htmlFor="password">Password:</InputLabel>
						<Input id="password"
							   placeholder="Пароль"
							   type="password"
							   name="password"
							   value={password}
							   onChange={handleChange}
							   inputProps={{'data-testid': 'password-field'}}
						/>
					</FormControl>
				</div>

				{isError ? <p data-testid="error-message">Введите логин и пароль!</p>: ''}

				<div className="button__group">
					<Button type="submit" data-testid="submit-button" variant="contained" color="primary">
						Войти
					</Button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
