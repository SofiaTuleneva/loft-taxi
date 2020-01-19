import React from 'react';
import Input from '../components/Input'
import ButtonAutoriz from '../components/ButtonAutoriz'

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Вход</h1>

                <form onSubmit={()=>this.props.changePage('map')}>
                    <Input descript="Имя пользователя*" type="text"/>
                    <Input descript="Пароль*" type="password"/>
                    <ButtonAutoriz forms="Войти" />
                </form>
            </div>
        )
    }
}

export default Login;
