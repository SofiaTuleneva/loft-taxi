import React from "react";
import Select from "react-select";
import {useSelector} from "react-redux";

const OrderForm = () => {
	const addresses = useSelector(state => state.route.data.addresses);

	const options = addresses.map(option => ({value: option, label: option}));

	return (
		<>
			<form action="/" method="">
				<div className="address__group">
					<Select
						options={options}
						className="address__input"
						placeholder="Откуда"
						isClearable
						isSearchable
					/>
					<Select
						options={options}
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