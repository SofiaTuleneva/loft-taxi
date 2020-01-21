import React from 'react';
import Input from "../components/Input";
import ButtonAutoriz from '../components/ButtonAutoriz'

class SignIn extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changePage('map');
    };

    render() {
        return (
            <div>
                <h1>Регистрация</h1>

                <form onSubmit={this.handleSubmit}>
                    <Input description="Email*" type="email"/>
                    <Input description="Имя" type="text"/>
                    <Input description="Фaмилия" type="text"/>
                    <Input description="Пароль*" type="password"/>
                    <ButtonAutoriz value="Зарегистрироваться" />
                </form>
            </div>
        )
    }
}

export default SignIn;