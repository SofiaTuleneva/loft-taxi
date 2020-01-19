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
    constructor(props) {
        super(props);
        this.state = {
            activePageId: 'login'
        };
    }

    changePage = pageId => {
        this.setState({
            activePageId: pageId
        });
    };

    getPageData = () => {
        return PAGES.find(el => el.id === this.state.activePageId);
    };

    render() {
        const activeComponent = this.getPageData().component(this.changePage);

        return (
            <div className="App">
                <Header 
                    pages={PAGES}
                    changePage={this.changePage}
                    activePageId={this.state.activePageId}
                />
                {activeComponent}
            </div>
        );
    }
}

export default App;
