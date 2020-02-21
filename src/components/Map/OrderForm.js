import React, {useState, useCallback} from "react";
import Select from "react-select";
import {useSelector, useDispatch} from "react-redux";
import {fetchRouteRequest, clearOrder} from "../../modules/map/actions";

const OrderForm = () => {
	const dispatch = useDispatch();
	const addresses = useSelector(state => state.map.addresses.addresses);

	// Local state
	const [addressOne, setAddressOne] = useState(null);
	const [addressTwo, setAddressTwo] = useState(null);
	const [orderIsReady, setOrderIsReady] = useState(false);

	// Options
	const options = addresses.map(option => ({value: option, label: option}));
	const filteredOptions = options.filter(
		option => ![addressOne, addressTwo].includes(option.label)
	);

	const handleChangeAddressOne = useCallback(
		e => {
			const value = e ? e.value : null;
			setAddressOne(value);
		},
		[setAddressOne]
	);

	const handleChangeAddressTwo = useCallback(
		e => {
			const value = e ? e.value : null;
			setAddressTwo(value);
		},
		[setAddressTwo]
	);

	const handleSubmit = e => {
		e.preventDefault();
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
					<button className="form__btn" onClick={handleClearOrder}>
						Сделать новый заказ
					</button>
				</>
			) : (
				<form action="/" method="" onSubmit={handleSubmit}>
					<div className="address__group">
						<Select
							options={filteredOptions}
							onChange={handleChangeAddressOne}
							className="address__input"
							placeholder="Откуда"
							isClearable
							isSearchable
						/>
						<Select
							options={filteredOptions}
							onChange={handleChangeAddressTwo}
							className="address__input"
							placeholder="Куда"
							isClearable
							isSearchable
						/>
					</div>
					<button type="submit" className="form__btn" disabled={!addressOne || !addressTwo}>
						Вызвать такси
					</button>
				</form>
			)}
		</>
	);
};

export default OrderForm;