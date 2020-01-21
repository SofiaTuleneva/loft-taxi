import React from 'react';
import Input from '../components/Input'
import ButtonAutoriz from '../components/ButtonAutoriz'

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Вход</h1>

                <form onSubmit={()=>this.props.changePage('map')}>
                    <Input description="Имя пользователя*" type="text"/>
                    <Input description="Пароль*" type="password"/>
                    <ButtonAutoriz value="Войти" />
                </form>
            </div>
        )
    }
}

export default Login;
