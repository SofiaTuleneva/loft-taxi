import React, {useState, useCallback} from "react";
import Select from "react-select";
import {useSelector, useDispatch} from "react-redux";
import {fetchRouteRequest, clearOrder} from "../../modules/map/actions";
import {useForm, Controller} from "react-hook-form";
import {Button} from "@material-ui/core";

const OrderForm = () => {
	const dispatch = useDispatch();
	const addresses = useSelector(state => state.map.addresses.addresses);
	const methods = useForm();
	const {handleSubmit, control} = methods;

	// Local state
	const [addressOne, setAddressOne] = useState(null);
	const [addressTwo, setAddressTwo] = useState(null);
	const [orderIsReady, setOrderIsReady] = useState(false);

	// Options
	const options = addresses.map(option => ({value: option, label: option}));
	const filteredOptions = options.filter(
		option => ![addressOne, addressTwo].includes(option.label)
	);

	const handleChangeAddressOne = data => {
		const value = data ? data[0].value : null;
		setAddressOne(value);
	};

	const handleChangeAddressTwo = data => {
		const value = data ? data[0].value : null;
		setAddressTwo(value);
	};

	const onSubmit = () => {
		dispatch(
			fetchRouteRequest({
				addressOne,
				addressTwo
			})
		);
		setOrderIsReady(true);
	};

	const handleClearOrder = useCallback(
		e => {
			setOrderIsReady(false);
			setAddressOne(null);
			setAddressTwo(null);

			dispatch(
				clearOrder({
					status: false,
					coordinates: null,
				})
			);
		},
		[setOrderIsReady, dispatch]
	);

	return (
		<>
			{orderIsReady ? (
				<>
					<h1>Заказ размещён</h1>
					<p className="panel__subtext">
						Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
					</p>
					<Button fullWidth variant="contained" color="primary" className="form__btn" onClick={handleClearOrder}>
						Сделать новый заказ
					</Button>
				</>
			) : (
				<form noValidate onSubmit={handleSubmit(onSubmit)} action="/" method="">
					<div className="address__group">
						<Controller
							as={<Select />}
							options={filteredOptions}
							control={control}
							name="addressOne"
							placeholder="Откуда"
							onChange={handleChangeAddressOne}
						/>
						<br/>
						<Controller
							as={<Select />}
							options={filteredOptions}
							control={control}
							name="addressTwo"
							placeholder="Куда"
							onChange={handleChangeAddressTwo}
						/>
					</div>
					<Button fullWidth variant="contained" color="primary" type="submit" className="form__btn" disabled={!addressOne || !addressTwo}>
						Вызвать такси
					</Button>
				</form>
			)}
		</>
	);
};

export default OrderForm;