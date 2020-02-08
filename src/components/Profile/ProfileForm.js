import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProfileRequest} from '../../modules/profile/actions';
import {
	Button,
	TextField
} from '@material-ui/core';
import {paths} from "../../constants/Paths";
import {Link} from 'react-router-dom';

const ProfileForm = () => {

	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const [data, setData] = useState({
		cardNumber: '',
		expiryDate: '',
		cardName: '',
		cvc: '',
	});

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(fetchProfileRequest({
			cardNumber: data.cardNumber,
			expiryDate: data.expiryDate,
			cardName: data.cardName,
			cvc: data.cvc,
			token: state.auth.token,
		}));
	};

	const handleChange = ({target}) => {
		setData({
			...data,
			[target.name]: target.value,
		})
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="login__form">
				<h1 className="form__title">Профиль</h1>
				<div><TextField label="Номер карты*" name='cardNumber' type="text" onChange={handleChange} required/></div>
				<div><TextField label="Срок действия*" name='expiryDate' type="text" onChange={handleChange} required/></div>
				<div><TextField label="Имя владельца*" name='cardName' type="text" onChange={handleChange} required/></div>
				<div><TextField label="CVC*" name='cvc' type="text" onChange={handleChange} required/></div>
				<br/>
				<div className="button__group">
					<Button type="submit" disabled={state.profile.pending} variant="contained" color="primary">
						Сохранить
					</Button>
					<div className="pending">
						{state.profile.pending ? ' Загрузка...' : ''}
						{state.profile.isSaved ? ' Данные сохранены' : ''}
					</div>
				</div>
			</form>
		</>
	);
};

export default ProfileForm;