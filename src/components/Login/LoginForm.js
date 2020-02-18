import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchLoginRequest} from '../../modules/auth/actions';
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

	const [data, setData] = useState({email: '', password: ''});

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(fetchLoginRequest({
			email: data.email,
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
						<InputLabel htmlFor="email">Email:</InputLabel>
						<Input id="email"
							   placeholder="Логин"
							   type="text"
							   name="email"
							   value={data.email}
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