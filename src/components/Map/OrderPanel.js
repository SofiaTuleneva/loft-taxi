import React from "react";
import {useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import {paths} from "../../constants/Paths";
import OrderForm from "./OrderForm";

const OrderPanel = () => {
	const state = useSelector(state => state);
	const history = useHistory();

	const handleClick = () => {
		history.push(paths.profile);
	};

	return (
		<>
			{state.profile.data ?
				<div className="container">
					<div className="map__panel">
						<OrderForm/>
					</div>
				</div>
				:
				<div className="container">
					<div className="map__panel">
						<h1>Заполните платежные данные</h1>
						<p className="panel__subtext">
							Укажите информацию о банковской карте, чтобы сделать
							заказ.
						</p>
						<Link className="form__btn" to={paths.profile} onClick={handleClick}>Перейти в
							профиль</Link>
					</div>
				</div>
			}
		</>

	);
};

export default OrderPanel;