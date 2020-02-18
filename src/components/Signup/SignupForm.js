import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchSignupRequest} from '../../modules/auth/actions';
import {paths} from '../../constants/Paths';

import {
	Button,
	TextField,
} from '@material-ui/core';

const SignupForm = () => {

	const state = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const [data, setData] = useState({
		email: '',
		password: '',
		name: '',
		surname: '',
	});

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(fetchSignupRequest({
			email: data.email,
			password: data.password,
			name: data.name,
			surname: data.surname,
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
				<h1 className="form__title">Регистрация</h1>

				<div><TextField label="Email*" name='email' type="email" onChange={handleChange} /></div>
				<div><TextField label="Имя" name='name' type="text" onChange={handleChange} /></div>
				<div><TextField label="Фaмилия" name='surname' type="text" onChange={handleChange} /></div>
				<div><TextField label="Пароль*" name='password' type="password" onChange={handleChange}/></div>
				<br/>
				<div className="button__group">
					<Button type="submit" disabled={state.pending} variant="contained" color="primary">
						Зарегистрироваться
					</Button>
					<div className="pending">
						{state.pending ? ' Загрузка...' : ''}
					</div>
				</div>
			</form>
		</>
	)
};

export default SignupForm;