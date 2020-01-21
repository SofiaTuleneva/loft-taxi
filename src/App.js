import React from 'react';
import './App.css';
import Login from './login/Login';
import Map from './map/Map';
import Profile from './profile/Profile';
import Signup from './signup/Signup';
import Header from './shared/Header';

const PAGES = [
    {
        id: 'login',
        name: 'Вход',
        component: changePage => <Login changePage={changePage} />
    },
    {
        id: 'map',
        name: 'Карта',
        component: () => <Map />
    },
    {
        id: 'profile',
        name: 'Профиль',
        component: () => <Profile />
    },
    {
        id: 'signup',
        name: 'Регистрация',
        component: changePage => <Signup changePage={changePage} />
    }
];

class App extends React.Component {

    state = {activePageId: 'login'};

    changePage = activePageId => {
        this.setState({activePageId});
    };

    getPageData = () => {
        return PAGES.find(({ id }) => id === this.state.activePageId);
    };

    render() {
        const pageContent = this.getPageData().component(this.changePage);

        return (
            <div className="App">
                <Header 
                    pages={PAGES}
                    changePage={this.changePage}
                    activePageId={this.state.activePageId}
                />
                {pageContent}
            </div>
        );
    }
}

export default App;