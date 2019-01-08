import React from 'react';
import Header from '../header/Header';
import Welcome from '../register/welcome/Welcome';
import SideBar from '../sidebar/SideBar';
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>

                <Header />
                <Welcome />
                <SideBar />
            </div>
        );
    }
}

export default Home;
