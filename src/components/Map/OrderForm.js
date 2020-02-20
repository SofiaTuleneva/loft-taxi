import React, {useState, useCallback} from "react";
import Select from "react-select";
import {useSelector} from "react-redux";

const OrderForm = () => {
	const addresses = useSelector(state => state.route.data.addresses);

	// Local state
	const [addressOne, setAddressOne] = useState(null);
	const [addressTwo, setAddressTwo] = useState(null);

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

	return (
		<>
			<form action="/" method="">
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
				<input
					type="submit"
					className="form__btn"
					value="Вызвать такси"
				/>
			</form>
		</>
	);
};

export default OrderForm;