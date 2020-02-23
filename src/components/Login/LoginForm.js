import React from "react";
import {useForm, Controller} from "react-hook-form";
import {Button, FormControl, TextField} from "@material-ui/core";
import {fetchLoginRequest} from "../../modules/auth";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, Link} from "react-router-dom";
import {paths} from "../../constants/Paths";
import {validationMessages} from "../../constants/Messages";

function LoginForm() {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const methods = useForm();
	const {handleSubmit, control, errors} = methods;

	const onSubmit = data => {
		dispatch(fetchLoginRequest(data));
	};

	const getHelperText = field => {
		return errors && errors[field] && validationMessages[field][errors[field].type];
	};

	return auth.isLoggedIn ? <Redirect to={paths.map}/> : (
		<form noValidate onSubmit={handleSubmit(onSubmit)} className="login__form">
			<h1 className="form__title">Войти</h1>
			<div className="form__subtitle">
				Новый пользователь? <Link to={paths.signup}>Зарегистрируйтесь</Link>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
						id="email"
						type="text"
						name="email"
						placeholder="Email*"
						defaultValue=''
						rules={{
							required: true,
							pattern: /^\S+@\S+$/i,
						}}
						error={!!errors.email}
						helperText={getHelperText('email')}
					/>
				</FormControl>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
						id="password"
						type="password"
						name="password"
						placeholder="Пароль*"
						defaultValue=''
						rules={{
							required: true,
						}}
						error={!!errors.password}
						helperText={getHelperText('password')}
					/>
				</FormControl>
			</div>
			<div className="button__group">
				<Button type="submit" disabled={auth.pending} data-testid="submit-button" variant="contained" color="primary">
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