import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProfileRequest, fetchProfileGet} from '../../modules/profile/actions';
import {
	Button, FormControl, Input, InputLabel
} from '@material-ui/core';

const ProfileForm = () => {

	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const {cardNumber, expiryDate, cardName, cvc} = state.profile.data;

	const [data, setData] = useState({
		cardNumber,
		expiryDate,
		cardName,
		cvc,
	});

	useEffect(() => {
		dispatch(fetchProfileGet({
			token: state.auth.token,
		}));
	}, []);

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
			<div className="bg-container">
				<div className="container">
					<div className="profile__content">

						<form action="" method="" onSubmit={handleSubmit} className="form form--profile">
							<h1 className="form__title">Профиль</h1>
							<div className="form__subtitle">Способ оплаты</div>

							<div className="form__panels">
								<div className="form__panel">
									<div className="input__group">
										<FormControl fullWidth>
											<InputLabel htmlFor="cardNumber">Номер карты*</InputLabel>
											<Input id="cardNumber"
												   placeholder="Логин"
												   type="text"
												   name="cardNumber"
												   defaultValue={cardNumber}
												   onChange={handleChange}
												   required
											/>
										</FormControl>
									</div>
									<div className="input__group">
										<FormControl fullWidth>
											<InputLabel htmlFor="expiryDate">Срок действия*</InputLabel>
											<Input id="expiryDate"
												   placeholder="Логин"
												   type="text"
												   name="expiryDate"
												   defaultValue={expiryDate}
												   onChange={handleChange}
												   required
											/>
										</FormControl>
									</div>
								</div>
								<div className="form__panel">
									<div className="input__group">
										<FormControl fullWidth>
											<InputLabel htmlFor="cardName">Имя владельца*</InputLabel>
											<Input id="cardName"
												   placeholder="NAME"
												   type="text"
												   name="cardName"
												   defaultValue={cardName}
												   onChange={handleChange}
												   required
											/>
										</FormControl>
									</div>
									<div className="input__group">
										<FormControl fullWidth>
											<InputLabel htmlFor="cvc">CVC*</InputLabel>
											<Input id="cvc"
												   placeholder="123"
												   type="text"
												   name="cvc"
												   defaultValue={cvc}
												   onChange={handleChange}
												   required
											/>
										</FormControl>
									</div>
								</div>
							</div>

							<Button type="submit" disabled={state.profile.pending} variant="contained"
									color="primary" className="form__btn">
								Сохранить
							</Button>

							<div className="pending">
								{state.profile.pending ? ' Загрузка...' : ''}
							</div>

						</form>


					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileForm;