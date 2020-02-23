import React from "react";

export const validationMessages = {
	email: {
		pattern: <span>Введите email корректно</span>,
		required: <span>Введите email</span>,
	},
	password: {
		required: <span>Введите пароль</span>,
	},
	name: {
		required: <span>Заполните поле</span>,
	},
	surname: {
		required: <span>Заполните поле</span>,
	},
};