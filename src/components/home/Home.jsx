import React from 'react';
import Header from '../header/Header';
import Welcome from '../register/welcome/Welcome';
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>

                <Header />
                <Welcome />

            </div>
        );
    }
}

export default Home;
