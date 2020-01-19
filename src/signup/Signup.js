import React from 'react';
import Input from "../components/Input";
import ButtonAutoriz from '../components/ButtonAutoriz'

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <h1>Регистрация</h1>

                <form onSubmit={()=>this.props.changePage('map')}>
                    <Input descript="Email*" type="email"/>
                    <Input descript="Имя" type="text"/>
                    <Input descript="Фaмилия" type="text"/>
                    <Input descript="Пароль*" type="password"/>
                    <ButtonAutoriz forms="Зарегистрироваться" />
                </form>
            </div>
        )
    }
}

export default SignIn;