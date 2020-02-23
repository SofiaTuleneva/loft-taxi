import React from "react";
import {useForm, Controller} from "react-hook-form";
import {Button, FormControl, TextField} from "@material-ui/core";
import {fetchSignupRequest} from '../../modules/auth';
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {paths} from "../../constants/Paths";
import {validationMessages} from "../../constants/Messages";

function SignupForm() {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const methods = useForm();
	const {handleSubmit, control, errors} = methods;

	const onSubmit = data => {
		dispatch(fetchSignupRequest(data));
	};

	const getHelperText = field => {
		return errors && errors[field] && validationMessages[field][errors[field].type];
	};

	return auth.isLoggedIn ? <Redirect to={paths.map}/> : (
		<form noValidate onSubmit={handleSubmit(onSubmit)} className="login__form">
			<h1 className="form__title">Регистрация</h1>
			<div className="form__subtitle">
				Уже зарегистрированы? <Link to={paths.login}>Войти</Link>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
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
						type="text"
						name="name"
						placeholder="Имя"
						defaultValue=''
						rules={{
							required: true
						}}
						error={!!errors.name}
						helperText={getHelperText('name')}
					/>
				</FormControl>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
						type="text"
						name="surname"
						placeholder="Фaмилия"
						defaultValue=''
						rules={{
							required: true
						}}
						error={!!errors.surname}
						helperText={getHelperText('surname')}
					/>
				</FormControl>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
						type="password"
						name="password"
						placeholder="Пароль*"
						defaultValue=''
						rules={{
							required: true
						}}
						error={!!errors.password}
						helperText={getHelperText('password')}
					/>
				</FormControl>
			</div>
			<div className="button__group">
				<Button type="submit" disabled={auth.pending} data-testid="submit-button" variant="contained" color="primary">
					Зарегистрироваться
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

export default SignupForm;