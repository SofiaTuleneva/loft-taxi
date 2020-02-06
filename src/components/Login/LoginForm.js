import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchAuthRequest} from '../../modules/auth/actions';
import {Link} from 'react-router-dom';
import {paths} from '../../constants/Paths';

import {
	Button,
	FormControl,
	InputLabel,
	Input
} from '@material-ui/core';

const LoginForm = () => {

	const state = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const [data, setData] = useState({login: '', password: ''});

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(fetchAuthRequest({
			login: data.login,
			password: data.password,
		}));
	};

	const handleChange = ({target}) => {
		setData({
			...data,
			[target.name]: target.value,
		})
	};

	return state.isLoggedIn ? <Redirect to={paths.map}/> : (
		<>
			<form onSubmit={handleSubmit} className="login__form">
				<h1 className="form__title">Войти</h1>
				<div className="form__subtitle">
					Новый пользователь? <Link to={paths.signup}>Зарегистрируйтесь</Link>
				</div>
				<div className="input__group">
					<FormControl fullWidth>
						<InputLabel htmlFor="login">Login:</InputLabel>
						<Input id="login"
							   placeholder="Логин"
							   type="text"
							   name="login"
							   value={data.login}
							   onChange={handleChange}
							   inputProps={{'data-testid': 'login-field'}}
							   required
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
							   value={data.password}
							   onChange={handleChange}
							   inputProps={{'data-testid': 'password-field'}}
							   required
						/>
					</FormControl>
				</div>
				<div className="button__group">
					<Button type="submit" disabled={state.pending} data-testid="submit-button" variant="contained" color="primary">
						Войти
					</Button>
					<div className="pending">
						{state.pending ? ' Загрузка...' : null}
					</div>
				</div>
			</form>
		</>
	);
};

export default LoginForm;