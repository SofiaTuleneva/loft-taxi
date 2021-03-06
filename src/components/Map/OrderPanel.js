import React from "react";
import {useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import {paths} from "../../constants/Paths";
import OrderForm from "./OrderForm";
import {Paper, Typography} from '@material-ui/core';

const OrderPanel = () => {
	const state = useSelector(state => state);
	const history = useHistory();

	const handleClick = () => {
		history.push(paths.profile);
	};

	return (
		<>
			{state.profile.data.cardNumber ?
				<Paper>
					<div className="map__panel">
						<OrderForm/>
					</div>
				</Paper>

				:

				<div className="map__panel">
					<Typography variant="h4">Заполните платежные данные</Typography>
					<p className="panel__subtext">
						Укажите информацию о банковской карте, чтобы сделать
						заказ.
					</p>
					<Link className="form__btn" to={paths.profile} onClick={handleClick}>Перейти в
						профиль</Link>
				</div>
			}
		</>

	);
};

export default OrderPanel;