import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProfileRequest} from '../../modules/profile/actions';
import {
	Button, FormControl, InputLabel
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
		setData(state.profile.data);
	}, [state.profile.data]);

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
											<input id="cardNumber"
												   placeholder="Номер карты"
												   type="text"
												   name="cardNumber"
												   defaultValue={data.cardNumber}
												   onChange={handleChange}
												   required
											/>
										</FormControl>
									</div>
									<div className="input__group">
										<FormControl fullWidth>
											<InputLabel htmlFor="expiryDate">Срок действия*</InputLabel>
											<input id="expiryDate"
												   placeholder="Срок действия"
												   type="text"
												   name="expiryDate"
												   defaultValue={data.expiryDate}
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
											<input id="cardName"
												   placeholder="Имя владельца"
												   type="text"
												   name="cardName"
												   defaultValue={data.cardName}
												   onChange={handleChange}
												   required
											/>
										</FormControl>
									</div>
									<div className="input__group">
										<FormControl fullWidth>
											<InputLabel htmlFor="cvc">CVC*</InputLabel>
											<input id="cvc"
												   placeholder="CVC"
												   type="text"
												   name="cvc"
												   defaultValue={data.cvc}
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