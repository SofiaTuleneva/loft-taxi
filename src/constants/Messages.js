import React from "react";

export const validationMessages = {
	email: {
		required: <span>Введите email</span>,
		pattern: <span>Введите email корректно</span>,
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
	cardNumber: {
		required: <span>Заполните поле</span>,
		pattern: <span>Введите 16 цифр</span>,
	},
	expiryDate: {
		required: <span>Заполните поле</span>,
	},
	cardName: {
		required: <span>Заполните поле</span>,
	},
	cvc: {
		required: <span>Заполните поле</span>,
		pattern: <span>Введите cvc корректно</span>,
	},
};