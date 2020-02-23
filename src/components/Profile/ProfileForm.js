import React, {useEffect, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {Button, FormControl, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {paths} from "../../constants/Paths";
import {fetchProfileRequest} from "../../modules/profile";
import {validationMessages} from "../../constants/Messages";

const ProfileForm = () => {

	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const history = useHistory();

	const [defaultData, setData] = useState(state.profile.data);
	const methods = useForm();
	const {reset, handleSubmit, control, errors} = methods;

	useEffect(() => {
		setData(state.profile.data);
		reset(state.profile.data);
	}, [state.profile.data]);

	const onSubmit = data => {
		dispatch(fetchProfileRequest({
			...data,
			token: state.auth.token,
		}));
		history.push(paths.map);
	};

	const getHelperText = field => {
		return errors && errors[field] && validationMessages[field][errors[field].type];
	};

	return (
		<form noValidate onSubmit={handleSubmit(onSubmit)} className="form form--profile">
			<h1 className="form__title">Профиль</h1>
			<div className="form__subtitle">Способ оплаты</div>

			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
						type="text"
						name="cardNumber"
						placeholder="Номер карты*"
						defaultValue={defaultData.cardNumber || ''}
						rules={{
							required: true,
							pattern: /^[0-9]{16}$/,
						}}
						error={!!errors.cardNumber}
						helperText={getHelperText('cardNumber')}
					/>
				</FormControl>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
						type="text"
						name="expiryDate"
						placeholder="Срок действия*"
						defaultValue={defaultData.expiryDate || ''}
						rules={{
							required: true,
						}}
						error={!!errors.expiryDate}
						helperText={getHelperText('expiryDate')}
					/>
				</FormControl>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
						type="text"
						name="cardName"
						placeholder="Имя владельца*"
						defaultValue={defaultData.cardName || ''}
						rules={{
							required: true,
						}}
						error={!!errors.cardName}
						helperText={getHelperText('cardName')}
					/>
				</FormControl>
			</div>
			<div className="input__group">
				<FormControl fullWidth>
					<Controller
						as={<TextField/>}
						control={control}
						type="text"
						name="cvc"
						placeholder="CVC*"
						defaultValue={defaultData.cvc || ''}
						rules={{
							required: true,
							pattern: /^[0-9]{3,4}$/,
						}}
						error={!!errors.cvc}
						helperText={getHelperText('cvc')}
					/>
				</FormControl>
			</div>

			<div className="button__group">
				<Button type="submit" data-testid="submit-button" variant="contained"
						color="primary">
					Сохранить
				</Button>
			</div>
		</form>
	);
};

export default ProfileForm;