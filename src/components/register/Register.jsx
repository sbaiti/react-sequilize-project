import React from 'react';
import Header from '../header/Header';
//import Form from './Form';
import Welcome from './welcome/Welcome';
import './register.css';




class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="register">
                <Header />
                <Welcome />
            </div>
        )
    }
}
export default Register;

