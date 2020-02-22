import React from "react";
import {useForm} from "react-hook-form";
import {Button, FormControl} from "@material-ui/core";
import {fetchLoginRequest} from "../../modules/auth";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, Link} from "react-router-dom";
import {paths} from "../../constants/Paths";

function LoginForm() {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const methods = useForm();
	const {handleSubmit, register, errors} = methods;

	const onSubmit = data => {
		const {email, password} = data;

		dispatch(fetchLoginRequest({
			email,
			password,
		}));
	};

	const errorMessages = {
		email: {
			pattern: <span>Введите email корректно</span>,
			required: <span>Введите email</span>,
		},
		password: {
			required: <span>Введите пароль</span>,
		},
	};

	return auth.isLoggedIn ? <Redirect to={paths.map}/> : (
		<form onSubmit={handleSubmit(onSubmit)} className="login__form">
			<h1 className="form__title">Войти</h1>
			<div className="form__subtitle">
				Новый пользователь? <Link to={paths.signup}>Зарегистрируйтесь</Link>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					{errors?.email && errorMessages.email[errors.email.type]}
					<input
						id="email"
						type="text"
						name="email"
						placeholder="Email*"
						defaultValue=''
						ref={register({
							required: true,
							pattern: /^\S+@\S+$/i,
						})}
					/>
				</FormControl>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					{errors?.password && errorMessages.password[errors.password.type]}
					<input
						id="password"
						type="password"
						name="password"
						placeholder="Пароль*"
						defaultValue=''
						ref={register({
							required: true
						})}
					/>
				</FormControl>
			</div>
			<div className="button__group">
				<Button type="submit" data-testid="submit-button" variant="contained" color="primary">
					Войти
				</Button>
			</div>
			<div className="pending">
				{auth.pending ? ' Загрузка...' : null}
			</div>
			{auth.error ?
				<div data-testid={'error-message'} className="error">
					{auth.error?.error}
				</div>
				: ''}
		</form>
	);
}

export default LoginForm;